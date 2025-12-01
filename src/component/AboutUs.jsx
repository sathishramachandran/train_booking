import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-wrapper fade-in">
      {/* ---------------- LEFT SIDE CONTENT ---------------- */}
      <div className="about-left">
        <p className="about-subtitle">How It Started</p>

        <h2 className="about-title">
          Our Mission Is To
          <br />
          Transform Railway Booking
        </h2>

        <p className="about-desc">
          Our Train Booking System was created to provide a fast, simple, and
          modern digital alternative to traditional ticket booking. Inspired by
          IRCTC's ecosystem, our platform is built to make travel planning
          easier, faster, and more reliable.
          <br />
          <br />
          We focus on clean UI, smooth performance, real-time seat availability,
          and effortless booking with complete transparency.
        </p>
      </div>

      {/* ---------------- RIGHT SECTION ---------------- */}
      <div className="about-right">
        {/* IMAGE */}
        <div className="about-image-box">
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/785/476/non_2x/an-illustration-of-a-diverse-group-of-people-collaborating-on-a-project-around-a-table-they-are-using-laptops-and-writing-materials-free-vector.jpg"
            alt="Team Working"
          />
        </div>

        {/* STATISTICS GRID */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Trains Added</p>
          </div>

          <div className="stat-card">
            <h3>200+</h3>
            <p>Successful Bookings</p>
          </div>

          <div className="stat-card">
            <h3>4.9⭐</h3>
            <p>User Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
