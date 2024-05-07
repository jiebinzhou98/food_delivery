import React, { Fragment, useState } from "react";
// import App from "../App";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import facebook_icon from "../images/facebook_icon.png";
import twitter_icon from "../images/twitter_icon.png";
import instagram_icon from "../images/instagram_icon.png";

const Footer = () => {
  const [menu, setMenu] = useState("home");

  return (
    <Fragment>
      <div className="container-fluid text-start">
        <div className="row">
          <div className="col">
            BOBO's Restaurant
            <div>
              Welcome to Bobo's Restaurant Taste the goodness, feel the warmth.
              Indulge in a variety of flavors with our pizzas, burgers, pastas,
              and salads, catering to every palate. At Bobo's Restaurant, we're
              committed to serving you the finest quality food with exceptional
              hospitality. Join us for an unforgettable dining experience!
            </div>
          </div>
          <div className="col">
            Company
            <nav className="nav flex-column">
              <a
                onMouseOver={() => setMenu("home")}
                onMouseOut={() => setMenu("")}
                className="nav-link"
                href="/home"
              >
                Home
              </a>
              <a
                onMouseOver={() => setMenu("menu")}
                onMouseOut={() => setMenu("")}
                className="nav-link"
                href="/About Us"
              >
                About Us
              </a>
              <a
                onMouseOver={() => setMenu("Delivery")}
                onMouseOut={() => setMenu("")}
                className="nav-link"
                href="/Delivery"
              >
                Delivery
              </a>
              <a
                onMouseOver={() => setMenu("Privacy_Policy")}
                onMouseOut={() => setMenu("")}
                className="nav-link"
                href="/Privacy Policy"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
          <div className="col">
            Get in Touch
            <div>
              <div>1-234-456-7890</div>
              <div>markbobo666@gmail.com</div>
              <div className="row align-items-start">
                <div className="col-2">
                    <a href="https://www.facebook.com/DoorDash/"><img src={facebook_icon}  /></a>
                </div>
                <div className="col-2">
                    <a href="https://twitter.com/doordash"><img src={twitter_icon} /></a>
                </div>
                <div className="col-2">
                    <a href="https://www.instagram.com/doordash/"><img src={instagram_icon} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default Footer;
