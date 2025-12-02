import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { train, seats } = location.state || {};

  if (!train) return <h2 className="no-train-text">No Train Selected</h2>;

  const [passengers, setPassengers] = useState(
    seats.map(() => ({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleSubmit = () => {
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      if (!p.name || !p.age || !p.phone) {
        alert(`Please fill all fields for Passenger ${i + 1}`);
        return;
      }
    }

    const newBooking = {
      id: Date.now(),
      trainName: train.name,
      trainNumber: train.number,
      from: train.from,
      to: train.to,
      date: new Date().toLocaleDateString(),
      seats: seats,
      passengers: passengers,
      totalFare: seats.length * 250,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existing, newBooking];

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert("Booking Successful!");

    navigate("/booking");
  };

  return (
    <div className="booking-page">
      <div className="booking-form">
        <h2 className="section-title">Passenger Details</h2>

        {passengers.map((p, index) => (
          <div key={index} className="passenger-block">
            <h3>Passenger {index + 1}</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                value={p.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>

            <div className="form-flex">
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  value={p.age}
                  onChange={(e) => handleChange(index, "age", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select
                  value={p.gender}
                  onChange={(e) =>
                    handleChange(index, "gender", e.target.value)
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                value={p.phone}
                onChange={(e) => handleChange(index, "phone", e.target.value)}
              />
            </div>

            <hr />
          </div>
        ))}

        <button className="confirm-btn" onClick={handleSubmit}>
          Confirm Booking
        </button>
      </div>

      <div className="summary-section">
        <div className="summary-card">
          <h3>Journey Summary</h3>
          <p>
            <strong>Train:</strong> {train.name}
          </p>
          <p>
            <strong>Train No:</strong> {train.number}
          </p>
          <p>
            <strong>From:</strong> {train.from}
          </p>
          <p>
            <strong>To:</strong> {train.to}
          </p>
          <p>
            <strong>Seats:</strong> {seats.join(", ")}
          </p>
        </div>

        <div className="fare-card">
          <h3>Total Fare</h3>
          <p>₹250 x {seats.length}</p>
          <h4>₹{seats.length * 250}</h4>
        </div>
      </div>
    </div>
  );
}
