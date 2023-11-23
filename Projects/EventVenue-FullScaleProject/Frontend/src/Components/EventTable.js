import React, { useEffect, useState } from "react";
import "../Styles.css";
import axios from "axios";

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [venues, setVenues] = useState([]);
  const [venueID, setVenueID] = useState("");

  useEffect(() => {
    fetchEvents();
    fetchVenues();
  }, []);

  const validateInput = () => {
    if (!ticketPrice || !title || !description || !venueID) {
      setError("all fields are required >:( ");
      return false;
    }

    return true;
  };

  const fetchEvents = async () => {
    axios
      .get("http://localhost:5100/event/getAll")
      .then((response) => {
        console.log(response);
        setEvents(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const fetchVenues = async () => {
    axios
      .get("http://localhost:5100/venue/getAll")
      .then((response) => {
        console.log(response);
        setVenues(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleAddEvent = async () => {
    if (!validateInput()) return;

    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.post(
        "http://localhost:5100/event/add",
        { title, description, ticketPrice, venueID },
        { headers }
      );

      setShowAddModal(false);
      fetchEvents();
    } catch (error) {
      setError(error);
    }
  };

  const handelUpdateEventClickButton = (event) => {
    setShowUpdateModal(true);
    setSelectedEvent(event);
    setTitle(event.title);
    setDescription(event.description);
    setTicketPrice(event.ticketPrice);
    setVenueID(event.venueID);
  };

  const handleUpdateEvent = async () => {
    if (!validateInput) return;
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.put(
        `http://localhost:5100/event/update/${selectedEvent.ID}`,
        { title, description, ticketPrice, venueID },
        { headers }
      );

      setShowUpdateModal(false);
      fetchEvents();
    } catch (error) {
      setError(error);
    }
  };
  const handleDeleteEvent = async (eventID) => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.delete(`http://localhost:5100/event/delete/${eventID}`, {
        headers,
      });

      fetchEvents();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="card-main">
      <h1> Event Table </h1>
      {error && <p className="error-message">{error.message}</p>}

      <button
        className="button button-primary"
        onClick={() => {
          setShowAddModal(true);
        }}
      >
        Add Event
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ticket Price</th>
            <th>Description</th>
            <th>Venue ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.ID}>
              <td>{event.ID}</td>
              <td>{event.title}</td>
              <td>{event.ticketPrice}</td>
              <td>{event.description}</td>
              <td>{event.venueID}</td>
              <td>
                <button
                  className="button button-primary"
                  onClick={() => {
                    handelUpdateEventClickButton(event);
                  }}
                >
                  Update
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    handleDeleteEvent(event.ID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setShowAddModal(false);
              }}
            >
              &times;
            </span>
            <h2>Add New Event</h2>
            {error && <p className="error-message">{error.message}</p>}

            <div className="form-input">
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={ticketPrice}
                placeholder="Ticket Price"
                onChange={(e) => {
                  setTicketPrice(e.target.value);
                }}
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-input">
              <select
                value={venueID}
                onChange={(e) => {
                  setVenueID(e.target.value);
                }}
              >
                <option value="">Select a Venue</option>
                {venues.map((venue) => (
                  <option key={venue.ID} value={venue.ID}>
                    {venue.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="button button-primary" onClick={handleAddEvent}>
              Add Event
            </button>
          </div>
        </div>
      )}

      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setShowUpdateModal(false);
              }}
            >
              &times;
            </span>
            <h2>Update Event</h2>
            {error && <p className="error-message">{error.message}</p>}

            <div className="form-input">
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={ticketPrice}
                placeholder="Ticket Price"
                onChange={(e) => {
                  setTicketPrice(e.target.value);
                }}
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-input">
              <select
                value={venueID}
                onChange={(e) => {
                  setVenueID(e.target.value);
                }}
              >
                <option value="">Select a Venue</option>
                {venues.map((venue) => (
                  <option key={venue.ID} value={venue.ID}>
                    {venue.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="button button-primary"
              onClick={handleUpdateEvent}
            >
              Update Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTable;
