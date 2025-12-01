import React from "react";
import "./HelpSupport.css";

export default function HelpSupport() {
  return (
    <div className="help-container">
      <h2 className="help-title">Help & Support</h2>

      <div className="help-box-grid">
        <div className="help-box">
          <h3>📩 General Queries</h3>
          <p>
            Get answers related to train timings, booking process, and general
            questions.
          </p>
        </div>

        <div className="help-box">
          <h3>🎫 Booking Issues</h3>
          <p>
            Having trouble booking a ticket? Check solutions for payment, seat
            selection, and more.
          </p>
        </div>

        <div className="help-box">
          <h3>❌ Cancellations</h3>
          <p>
            Learn how to cancel tickets, refund rules, and cancellation charges.
          </p>
        </div>

        <div className="help-box">
          <h3>👤 Account Support</h3>
          <p>
            Having login or account issues? Reset password or update profile
            details.
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions (FAQ)</h3>

        <div className="faq-item">
          <h4>1. How do I book a train ticket?</h4>
          <p>
            Go to the Home page → Select From, To & Date → Pick a train → Select
            seats → Enter passenger details → Confirm booking.
          </p>
        </div>

        <div className="faq-item">
          <h4>2. How do I check my booked tickets?</h4>
          <p>
            Click on “Booking” in the navigation bar to view all your stored
            bookings.
          </p>
        </div>

        <div className="faq-item">
          <h4>3. I entered wrong details. Can I edit the ticket?</h4>
          <p>
            Currently editing tickets is not supported. You must cancel the
            booking and book again with correct details.
          </p>
        </div>

        <div className="faq-item">
          <h4>4. What are the refund rules?</h4>
          <p>
            Refund depends on cancellation time. Instant cancellation gets full
            refund. Late cancellations may reduce refund amount.
          </p>
        </div>

        <div className="faq-item">
          <h4>5. How do I contact support?</h4>
          <p>Use the contact details below for customer assistance.</p>
        </div>
      </div>

      <div className="contact-support">
        <h3>Contact Support</h3>
        <p>
          <strong>Email:</strong> sathishramu1999@gmail.com,
          sankeerthan2005@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 9488909434, 7397488588
        </p>
        <p>
          <strong>Working Hours:</strong> 10 AM – 6 PM (Mon – Sat)
        </p>
      </div>
    </div>
  );
}
