import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Train } from "../utils";

export default function TrainLayout({ selectedSeats, setSelectedSeats }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedTrain = Train.find((data) => data.id === parseInt(id));
  const isSleeper = selectedTrain.TrainType === "Sleeper";
  const seatWidth = isSleeper ? "80px" : "25px";
  const generateSeats = (array, key = "") =>
    array.map((seats) =>
      Array.isArray(seats) ? (
        <>
          {seats.map((seat) => (
            <div style={{ width: seatWidth }} key={seat}>
              {key}
              {seat}
            </div>
          ))}
        </>
      ) : (
        <div
          style={{
            width: seatWidth,
          }}
        >
          {key}
          {seats}
        </div>
      )
    );
  return (
    <>
      <h2>{selectedTrain.name}</h2>
      <h4>Tickect</h4>
      <h5>{selectedTrain.TrainType}</h5>
      <div className="flex">
        <div>
          <div style={{ width: seatWidth, background: "#b6b4b4" }}>
            <h6>Available</h6>
            {1}
          </div>
        </div>
        <div>
          <div style={{ width: seatWidth, background: "#b6b4b4" }}>
            <h6>Booking</h6>
            {1}
          </div>
        </div>
        <div>
          <div style={{ width: seatWidth, background: "#ff0000ff" }}>
            <h6>Selected</h6>
            {1}
          </div>
        </div>
        <ul className="disp felx">
          {isSleeper ? (
            <>
              <div>
                <h6>Upper</h6>
                <div>
                  {generateSeats(selectedTrain.seatLayout.upper.first, "U")}
                </div>
                <h6>Lower</h6>
                 <div>
                  {generateSeats(selectedTrain.seatLayout.upper.second, "U")}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
}
