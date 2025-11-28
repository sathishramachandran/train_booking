import './Footer.css';
import { FaFacebook } from "react-icons/fa";
export default function Footer(){
  return (
    <footer className="irctc-footer">
      <div className="footer-top">
        <h3>Train Ticket Booking </h3>

        <ul className='ul-footer'>
          <li>Contact</li>
          <li>About</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer-bottom">
        © 2025 Developed By Sankeerthan & Sathish <FaFacebook />
      </div>
    </footer>
  );
}
