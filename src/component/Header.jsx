import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <header className="irctc-header">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-section">
            <img
              src="https://t3.ftcdn.net/jpg/04/32/54/24/360_F_432542454_kfzQHjWPgdi4sx9EfXqOLPzSXFiJBf8l.jpg"
              alt="IRCTC Logo"
              className="irctc-logo"
            />
            <h2 className="app-title">Train Ticket Booking</h2>
          </div>

          {/* Desktop Menu */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>

            <a href="/booking">Booking</a>
            <a href="/help">Help & Support</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* Login + Register */}
          <div className="auth-buttons">
            <button
              className="login-btn"
              onClick={() => {
                setShowModal(true);
                setIsLogin(true);
              }}
            >
              Login
            </button>
            <button
              className="register-btn"
              onClick={() => {
                setShowModal(true);
                setIsLogin(false);
              }}
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>

      {/* MODAL LOGIN/REGISTER */}
      {showModal && (
        <div className="auth-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>
              ✖
            </span>

            <h2>{isLogin ? "Login" : "Register"}</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            {!isLogin && <input type="text" placeholder="Full Name" />}

            <button className="submit-auth">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
