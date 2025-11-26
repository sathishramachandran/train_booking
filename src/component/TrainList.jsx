import React from "react";

export default function TrainList({ trains = [] }) {
  return (
    <div>
      <h2>Available Trains</h2>

      {trains.length === 0 && <p>No trains found.</p>}

      {trains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>

          <p>
            <strong>Source:</strong> {train.source}
          </p>
          <p>
            <strong>Destination:</strong> {train.destination}
          </p>
          <p>
            <strong>Departure Time:</strong> {train.departureTime}
          </p>
          <p>
            <strong>Price:</strong> {train.price}
          </p>
          <p>
            <strong>Train Type:</strong> {train.TrainType}
          </p>
        </div>
      ))}
    </div>
  );
}
