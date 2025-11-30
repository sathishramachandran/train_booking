import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home({ trains }) {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    const query = new URLSearchParams({
      from,
      to,
      date,
    }).toString();

    navigate(`/trains?${query}`);
  };

  return (
    <div className="home">
      {/* ---------------- VIDEO SECTION ---------------- */}
      <div className="video-wrapper">
        <video autoPlay muted loop className="hero-video">
          <source src="/src/assets/trainviedo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ---------------- SEARCH SECTION ---------------- */}
      <div className="search-page">
        <h2 className="search-title">Search Trains</h2>

        <div className="search-box">
          {/* FROM */}
          <div className="form-group">
            <label>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>

          {/* TO */}
          <div className="form-group">
            <label>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">Select</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>

          {/* DATE */}
          <div className="form-group">
            <label>Date</label>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Select Date</option>
              <option>2025-11-28</option>
              <option>2025-11-29</option>
              <option>2025-11-30</option>
            </select>
          </div>

          {/* SEARCH BUTTON */}
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* ---------------- TOP TRAINS SECTION ---------------- */}
      <div className="top-trains-section">
        <h2 className="top-trains-title">Top Trains</h2>

        <div className="top-trains-grid">
          {/* Train 1 */}
          <div className="train-card">
            <img
              src="https://media.newindianexpress.com/newindianexpress%2F2024-11-30%2Fze6tf3p2%2FANI_20241130125647.jpeg?w=480&auto=format%2Ccompress&fit=max"
              alt="Chennai Express"
            />
            <h3>Chennai Express</h3>
            <p>A fast and comfortable train connecting Chennai to Bangalore.</p>
            <p>Known for punctual service and clean coaches.</p>
          </div>

          {/* Train 2 */}
          <div className="train-card">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1063601,resizemode-75,msid-115732108/industry/transportation/railways/high-speed-trains-indian-railways-280-kmph-speed-aerodynamic-design-indias-next-high-speed-trains-are-coming-soon-beml-icf-ashwini-vaishnaw.jpg"
              alt="Bangalore Mail"
            />
            <h3>Bangalore Mail</h3>
            <p>Reliable overnight train offering a smooth journey.</p>
            <p>Safe, comfortable and well-maintained coaches.</p>
          </div>

          {/* Train 3 */}
          <div className="train-card">
            <img
              src="https://cdn.siasat.com/wp-content/uploads/2025/04/MMTS-train-in-Hyderabad.jpg"
              alt="Hyderabad Special"
            />
            <h3>Hyderabad Special</h3>
            <p>Popular train offering clean and comfortable travel.</p>
            <p>Runs daily between Hyderabad and Chennai.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
