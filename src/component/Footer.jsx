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
            <strong>Phone:</strong> 9488909434, 7397488588
          </p>
          <p>
            <strong>Email:</strong> sathishramu1999@gmail.com,
            sankeerthan2005@gmail.com
          </p>
          <p>
            <strong>Timings:</strong> 10 AM – 6 PM (Mon–Sat)
          </p>
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
        © {new Date().getFullYear()} Train Ticket Booking.Developed by Sathish,
        Sankeerthan
      </div>
    </footer>
  );
}
