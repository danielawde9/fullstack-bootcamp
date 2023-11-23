import React, { useEffect, useState } from "react";
import "../Styles.css";
import axios from "axios";
const VenueTable = () => {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [error, setError] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = () => {
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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDeleteVenue = async (venueID) => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.delete(
        `http://localhost:5100/venue/delete/${venueID}`,
        {
          headers,
        }
      );
      console.log(response);
      fetchVenues();
    } catch (error) {
      setError(error);
    }
  };

  const handleAddVenue = async () => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("image", image);
    formData.append("address", address);

    try {
      await axios.post("http://localhost:5100/venue/add", formData, {
        headers,
      });

      fetchVenues();
      setShowAddModal(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdateVenueClickButton = (venue) => {
    setSelectedVenue(venue);
    setAddress(venue.address);
    setName(venue.name);
    setCapacity(venue.capacity);
    setDescription(venue.description);
    setImage(venue.image);
    setShowUpdateModal(true);
  };
  const handleUpdateVenue = async () => {
    const token = sessionStorage.getItem("authToken");
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("capacity", capacity);
    if (image) formData.append("image", image);
    formData.append("address", address);

    try {
      await axios.put(
        `http://localhost:5100/venue/update/${selectedVenue.ID}`,
        formData,
        {
          headers,
        }
      );

      fetchVenues();
      setError("");
      setShowUpdateModal(false);
    } catch (error) {
      setError(error);
    }
  };

  const [sortOrder, setSortOrder] = useState(true); // true for ascending order , false for descending
  const toggleSort = (field) => {
    const newSortedVenues = [...venues].sort((a, b) => {
      // if(a[field]< b[field]) return -1 aw 1 if i want sortOrder true aw false
      
      if (a[field] < b[field]) return sortOrder ? -1 : 1;

      if (a[field] > b[field]) return sortOrder ? 1 : -1;

      return 0;
    });

    setVenues(newSortedVenues);
    setSortOrder(!sortOrder);
  };

  return (
    <div className="card-main">
      <h1> Venue Table </h1>

      {error && <p className="error-message">{error.message}</p>}

      <button
        className="button button-primary"
        onClick={() => {
          setShowAddModal(true);
        }}
      >
        Add venue
      </button>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => toggleSort("ID")}>ID</th>
            <th onClick={() => toggleSort("name")}>Name</th>
            <th onClick={() => toggleSort("description")}>Description</th>
            <th onClick={() => toggleSort("capacity")}>Capacity</th>
            <th>Image</th>
            <th onClick={() => toggleSort("address")}>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr className="venue-table" key={venue.ID}>
              <td>{venue.ID}</td>
              <td>{venue.name}</td>
              <td>{venue.description}</td>
              <td>{venue.capacity}</td>
              <td>
                <img src={venue.image} alt={venue.name} />
              </td>
              <td>{venue.address}</td>
              <td>
                <button
                  className="button button-primary"
                  onClick={() => {
                    handleUpdateVenueClickButton(venue);
                  }}
                >
                  Update
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    handleDeleteVenue(venue.ID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Venue Modal */}
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
            <h2>Add Venue</h2>
            <div className="form-input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Venue Name"
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
              />
            </div>
            <div className="form-input">
              <input type="file" onChange={handleImageChange} />
            </div>
            <div className="form-input">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            <button className="button button-primary" onClick={handleAddVenue}>
              Add Venue
            </button>
          </div>
        </div>
      )}

      {/* Update Venue Modal */}
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
            <h2>Update Venue</h2>
            <div className="form-input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Venue Name"
              />
            </div>
            <div className="form-input">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="form-input">
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
              />
            </div>
            <div className="form-input">
              <input type="file" onChange={handleImageChange} />
            </div>
            <div className="form-input">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>

            <button
              className="button button-primary"
              onClick={handleUpdateVenue}
            >
              Update Venue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueTable;
