import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import vid from "../assets/trainviedo.mp4"

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
          <source src={vid} type="video/mp4" />
        </video>
      </div>

      {/* ---------------- SEARCH SECTION ---------------- */}
      <div className="search-page">
        <h2 className="search-title">Search Trains</h2>

        <div className="search-box">
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

          <div className="form-group">
            <label>Date</label>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Select Date</option>
              <option>2025-11-28</option>
              <option>2025-11-29</option>
              <option>2025-11-30</option>
            </select>
          </div>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* ---------------- TOP TRAINS SECTION ---------------- */}
      <div className="top-trains-section">
        <h2 className="top-trains-title">Top Trains</h2>

        <div className="top-trains-grid">
          <div className="train-card">
            <img src="https://media.newindianexpress.com/newindianexpress%2F2024-11-30%2Fze6tf3p2%2FANI_20241130125647.jpeg?w=480&auto=format%2Ccompress&fit=max" />
            <h3>Chennai Express</h3>
            <p>A fast and comfortable train connecting Chennai to Bangalore.</p>
            <p>Known for punctual service and clean coaches.</p>
          </div>

          <div className="train-card">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1063601,resizemode-75,msid-115732108/industry/transportation/railways/high-speed-trains-indian-railways-280-kmph-speed-aerodynamic-design-indias-next-high-speed-trains-are-coming-soon-beml-icf-ashwini-vaishnaw.jpg" />
            <h3>Bangalore Mail</h3>
            <p>Reliable overnight train offering a smooth journey.</p>
            <p>Safe, comfortable and well-maintained coaches.</p>
          </div>

          <div className="train-card">
            <img src="https://cdn.siasat.com/wp-content/uploads/2025/04/MMTS-train-in-Hyderabad.jpg" />
            <h3>Hyderabad Special</h3>
            <p>Popular train offering clean and comfortable travel.</p>
            <p>Runs daily between Hyderabad and Chennai.</p>
          </div>
        </div>
      </div>

      {/* ---------------- GALLERY SECTION ---------------- */}
      <div className="gallery-section">
        <h2 className="gallery-title">Train Interior Gallery</h2>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img src="https://images.unsplash.com/photo-1509329502519-c7bec26f5808?fm=jpg&q=60&w=3000" />
            <h4>Executive Class</h4>
            <p>Premium wide seats with spacious legroom for luxury travel.</p>
          </div>

          <div className="gallery-card">
            <img src="https://img.freepik.com/premium-photo/view-from-railway-carriage-with-its-luxurious-seats-waterfall-outside-window_1048944-16995400.jpg?w=740&q=80" />
            <h4>Scenic Chair Car</h4>
            <p>
              Large windows with recliner seating ideal for daytime journeys.
            </p>
          </div>

          <div className="gallery-card">
            <img src="https://railway-news.com/wp-content/uploads/2024/12/Train-Flooring-c-a2b-scaled-aspect-ratio-4-3-scaled.jpg" />
            <h4>Modern AC Coach</h4>
            <p>
              Enhanced flooring and comfort-focused interiors for long trips.
            </p>
          </div>

          <div className="gallery-card">
            <img src="https://d1c4d7gnm6as1q.cloudfront.net/Pictures/480xAny/5/6/9/48569_10_274694.jpg" />
            <h4>Semi Sleeper Coach</h4>
            <p>
              Night journey sleeper berths with improved safety and lighting.
            </p>
          </div>

          <div className="gallery-card">
            <img src="https://media.istockphoto.com/id/1178114557/photo/german-train-interior-with-two-rows-of-empty-seats-and-sunlight.jpg?s=612x612&w=0&k=20&c=9Vpmy9meQzW4vyrbuvPtT8HymWBA6wevTy5cOkKT1eQ=" />
            <h4>General Coach</h4>
            <p>
              Standard seating designed for short and medium-distance travel.
            </p>
          </div>

          <div className="gallery-card">
            <img src="https://img.freepik.com/premium-photo/interior-comfortable-highspeed-train-carriage_653715-1284.jpg" />
            <h4>AC Chair Car</h4>
            <p>
              Air-conditioned comfortable seating with clean modern interiors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
