import React from "react";
import "./Contact.css";
import {
  MdSupportAgent,
  MdPhoneInTalk,
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact-wrapper fade-contact">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2 className="contact-welcome">Welcome to our site</h2>

        <h1 className="contact-title">
          Live Support <br />
          <span>Railway Assistance</span>
        </h1>

        <p className="contact-desc">
          We are here to assist you with all your ticket booking issues,
          cancellations, refunds, train availability, and general railway
          support — available for you 24 hours a day, 7 days a week.
        </p>

        {/* ICON FEATURES */}
        <div className="contact-features">
          <div className="feature-box">
            <MdSupportAgent className="feature-icon" />
            <p>24/7 Support</p>
          </div>

          <div className="feature-box">
            <MdPhoneInTalk className="feature-icon" />
            <p>Instant Helpline</p>
          </div>

          <div className="feature-box">
            <MdEmail className="feature-icon" />
            <p>Email Ticketing</p>
          </div>

          <div className="feature-box">
            <MdLocationOn className="feature-icon" />
            <p>Nearby Stations</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="contact-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/520/520542.png"
          alt="Support Icon"
        />
        <div className="availability">
          <span>24</span>/<span>7</span>
        </div>
      </div>
    </div>
  );
}
