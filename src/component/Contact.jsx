import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      {/* Contact Info Cards */}
      <div className="contact-card-grid">
        <div className="contact-card">
          <h3>📞 Customer Care</h3>
          <p>
            <strong>Phone:</strong> 1800-111-139
          </p>
          <p>
            <strong>Working Hours:</strong> 24×7 Support
          </p>
          <p>For booking related queries or seat availability issues.</p>
        </div>

        <div className="contact-card">
          <h3>📩 Email Support</h3>
          <p>
            <strong>Email:</strong> support@traintickets.in
          </p>
          <p>Expected Response Time: 24–48 hours</p>
        </div>

        <div className="contact-card">
          <h3>💬 Online Complaints</h3>
          <p>
            For complaints regarding ticketing, payments, refunds or delays,
            submit a request through our support system.
          </p>
          <button className="complaint-btn">Submit Complaint</button>
        </div>
      </div>

      {/* Railway Office Section */}
      <div className="railway-office">
        <h3>Nearest Railway Zone Offices</h3>
        <ul>
          <li>
            <strong>Southern Railway (Chennai):</strong> Park Town, Chennai
          </li>
          <li>
            <strong>South Western Railway (Bangalore):</strong> Hubli HQ
          </li>
          <li>
            <strong>South Central Railway (Hyderabad):</strong> Secunderabad HQ
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h3>Send Us a Message</h3>

        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}
