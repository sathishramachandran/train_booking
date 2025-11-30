import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/booking">My Bookings</a>
          <a href="/help">Help & Support</a>
          <a href="/contact">Contact</a>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <p>
            <strong>Phone:</strong> 1800-111-139
          </p>
          <p>
            <strong>Email:</strong> support@traintickets.in
          </p>
          <p>
            <strong>Timings:</strong> 10 AM – 6 PM (Mon–Sat)
          </p>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <a href="https://www.irctc.co.in" target="_blank">
            IRCTC Official Website
          </a>
          <a href="https://www.indianrail.gov.in" target="_blank">
            Indian Railways
          </a>
          <a href="https://www.raildrishti.in" target="_blank">
            Rail Drishti
          </a>
          <a href="https://enquiry.indianrail.gov.in" target="_blank">
            Train Enquiry
          </a>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Train Ticket Booking. All Rights Reserved.
      </div>
    </footer>
  );
}
