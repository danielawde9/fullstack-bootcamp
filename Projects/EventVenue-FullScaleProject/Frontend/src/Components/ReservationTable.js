import React, { useEffect, useState } from "react";
import "../Styles.css";
import axios from "axios";

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    axios
      .get("http://localhost:5100/reservation/getAll")
      .then((response) => {
        console.log(response);
        setReservations(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handelDeleteReservations = async (reservationID) => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.delete(
        `http://localhost:5100/reservation/delete/${reservationID}`,
        { headers }
      );
      fetchReservations();
    } catch (error) {}
  };
  return (
    <div className="card-main">
      <h1> Reservation Table </h1>

      {error && <p className="error-message">{error.message}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Event Title</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservationID}>
              <td>{reservation.reservationID}</td>
              <td>{reservation.userID}</td>
              <td>{reservation.fullName}</td>
              <td>{reservation.email}</td>
              <td>{reservation.title}</td>
              <td>{reservation.date}</td>
              <td>{reservation.name}</td>
              <td>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    handelDeleteReservations(reservation.reservationID);
                  }}
                >
                  Cancel Reservation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
