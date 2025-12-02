import React from "react";
import "./HelpSupport.css";

export default function HelpSupport() {
  return (
    <div className="help-wrapper">
      <div className="help-card fade-help">
        {/* LEFT ILLUSTRATION */}
        <div className="help-left">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2544341689/display_1500/stock-vector-need-help-text-in-an-yellow-dialog-bubble-with-a-megaphone-2544341689.jpg"
            alt="Support Illustration"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="help-right">
          <h2 className="help-title">Need Some Help?</h2>

          <form className="help-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Email Address</label>
              <input type="email" placeholder="example@mail.com" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Select Issue</label>
                <select>
                  <option>Booking Issue</option>
                  <option>Payment Failed</option>
                  <option>Seat Availability</option>
                  <option>Refund Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="9876XXXX" />
              </div>
            </div>

            <button className="help-btn">Talk to an Agent</button>
          </form>

          {/* FOOTER */}
          <div className="help-footer">
            <h4>Train Support Centre</h4>
            <p>We usually respond within 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
