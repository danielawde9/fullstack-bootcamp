import "../Styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserID } from "../Util/GetUserData";

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5100/event/getAll");
        setEvents(response.data.data);
      } catch (error) {
        console.log("error fetching events", error);
        setError(error);
      }
    };

    fetchEvents();
    setUserID(getUserID());

    const fetchUserReservations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5100/reservation/getByUserID/${userID}`
        );
        setUserReservations(response.data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUserReservations();
  }, [userID]);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleReserve = async (eventID) => {
    const userID = getUserID();
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.post(
        "http://localhost:5100/reservation/add",
        { userID, eventID },
        { headers }
      );
      console.log("reservation added successfully");
      setUserReservations([...userReservations, response.data.data]);
    } catch (error) {
      setError(error);
    }
  };

  const isUserReserved = (eventID) => {
    // return true if eventID exists in userReservations array
    // else return false
    return userReservations.some(
      (reservation) => reservation.eventID === eventID
    );
  };

  return (
    <div className="card">
      {error && <p className="error-message">{error.message}</p>}

      <button onClick={handleLogout} className="submit-button">
        Logout
      </button>
      {events.length === 0 ? (
        <p> No events available</p>
      ) : (
        events.map((event) => (
          <div key={event.ID} className="card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button
              className="button button-primary"
              onClick={() => handleReserve(event.ID)}
              disabled={isUserReserved(event.ID)}
            >
              {isUserReserved(event.ID) ? "Reserved" : "Reserve This Event"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Home;
