import React from "react";
import "../CSS/LandingPage.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import InspireOthers from "../assets/images/InspireOthers.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
        <Nav showLoginButton={true} showGetStartedButton={true} />
      </div>
      <div className="main-container">
        <div className="container-one">
          <div>
            <h1>
              Discover your ideal<br></br> mentor and unlock <br></br>your dream
              job.
            </h1>
            <p>
              {" "}
              Let a suitable mentor guide you toward success and elevate your
              career <br></br>to new heights. Get started today and find the
              perfect match to help you <br></br>achieve your goals!{" "}
            </p>
            <button
              className="landingPageButton"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
          <div>
            <img className="inspireOthersImg" src={InspireOthers}></img>
          </div>
        </div>
      </div>
    </>
  );
}
