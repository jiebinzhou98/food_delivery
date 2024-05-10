import React from "react";
import "./footer.css";
import facebook_icon from "../images/facebook_icon.png";
import twitter_icon from "../images/twitter_icon.png";
import instagram_icon from "../images/instagram_icon.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h4>BOBO's Restaurant</h4>
          <p>
            Welcome to Bobo's Restaurant Taste the goodness, feel the warmth.
            Indulge in a variety of flavors with our pizzas, burgers, pastas,
            and salads, catering to every palate. At Bobo's Restaurant, we're
            committed to serving you the finest quality food with exceptional
            hospitality. Join us for an unforgettable dining experience!
          </p>
        </div>
        <div className="col">
          <h4>Company</h4>
          <nav className="nav flex-column">
            <a className="nav-link" href="/home">
              Home
            </a>
            <a className="nav-link" href="/About Us">
              About Us
            </a>
            <a className="nav-link" href="/Delivery">
              Delivery
            </a>
            <a className="nav-link" href="/Privacy Policy">
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="col">
          <h4>Get in Touch</h4>
          <div className="contact-info">
            <div>1-234-456-7890</div>
            <div>markbobo666@gmail.com</div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/DoorDash/">
              <img src={facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/doordash">
              <img src={twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/doordash/">
              <img src={instagram_icon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
