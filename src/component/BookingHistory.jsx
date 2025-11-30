import React, { useEffect, useState } from "react";
import "./BookingHistory.css";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div className="history-container">
      <h2 className="history-title">Booking History</h2>

      {bookings.length === 0 ? (
        <p className="no-booking">No bookings found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="booking-table">
            <thead>
              <tr>
                <th>Train</th>
                <th>Train No.</th>
                <th>From</th>
                <th>To</th>
                <th>Seats</th>
                <th>Passengers</th>
                <th>Total Fare</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td data-label="Train">{b.trainName}</td>
                  <td data-label="Train No.">{b.trainNumber}</td>
                  <td data-label="From">{b.from}</td>
                  <td data-label="To">{b.to}</td>
                  <td data-label="Seats">{b.seats.join(", ")}</td>
                  <td data-label="Passengers">
                    {b.passengers.map((p, i) => (
                      <div key={i}>
                        {p.name} ({p.gender}, {p.age})
                      </div>
                    ))}
                  </td>
                  <td data-label="Fare">₹{b.totalFare}</td>
                  <td data-label="Date">{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
