import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* INTRO */}
      <section className="about-section intro">
        <h2>About Our Train Ticket Booking System</h2>
        <p>
          Welcome to our Train Ticket Booking System — a fast, reliable, and
          user-friendly platform built to simplify your railway journey. We
          offer seamless ticket booking, real-time seat availability, and a
          smooth booking experience inspired by the Official IRCTC service.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-section features">
        <h3>Key Features</h3>
        <ul>
          <li>Fast and Secure Booking</li>
          <li>Real-time Seat Availability</li>
          <li>Multiple Train Options</li>
          <li>Digital Passenger Management</li>
          <li>Booking History & Ticket Records</li>
          <li>Clean, Easy-to-Use Interface</li>
        </ul>
      </section>

      {/* MISSION */}
      <section className="about-section mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide a railway booking system that is simple,
          efficient, and accessible to everyone. We aim to eliminate long queues
          and complex steps by providing a digital-first railway reservation
          solution.
        </p>
      </section>

      {/* VISION */}
      <section className="about-section vision">
        <h3>Our Vision</h3>
        <p>
          To become a modern, technology-driven railway booking platform that
          offers a smooth, safe, and hassle-free travel experience.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-section flow">
        <h3>How It Works</h3>
        <div className="steps-grid">
          <div className="step-card">1️⃣ Search Trains</div>
          <div className="step-card">2️⃣ Select Seats</div>
          <div className="step-card">3️⃣ Enter Passenger Details</div>
          <div className="step-card">4️⃣ Download / View Ticket</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section choose">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>24×7 Booking Access</li>
          <li>No Hidden Charges</li>
          <li>Transparent Seat Availability</li>
          <li>Lightning Fast Search</li>
          <li>Mobile Friendly Interface</li>
        </ul>
      </section>

      {/* SAFETY */}
      <section className="about-section safety">
        <h3>Safety & Security</h3>
        <p>
          We follow digital safety protocols and ensure your data is securely
          stored. Book your train journey with confidence — your privacy is our
          priority.
        </p>
      </section>

      {/* TEAM */}
      <section className="about-section team">
        <h3>Our Team</h3>
        <p>
          <strong>Developer:</strong> Sathish
        </p>
        <p>
          <strong>Collaborator:</strong> Sankeerthan
        </p>
        <p>
          <strong>Project Type:</strong> Mini Project
        </p>
      </section>

      {/* CONTACT */}
      <section className="about-section contact">
        <h3>Need Help?</h3>
        <p>
          Visit our <strong>Help & Support</strong> page for more information.
        </p>
      </section>
    </div>
  );
}
