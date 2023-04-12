import React from "react";
import "../CSS/LandingPage.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import InspireOthers from "../assets/images/InspireOthers.png";
import Writing from "../assets/images/Writing.png";
import workHome from "../assets/images/workHome.png";

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
        <div className="container-two">
          <div className="header">
            <h2>How can you discover the perfect mentor?</h2>
            <p>
              Combine your profession, industry, consultation needs, and more to
              find the perfect match with a mentor or mentee!
            </p>
          </div>
          <div className="pictureAndBubblesDiv1">
            <img className="writingImg" src={Writing}></img>
            <div className="bubblesDiv">
              <div className="firstRow">
                <p className="bubble">#Career Switching</p>
                <p className="bubble">#Portfolio</p>
                <p className="bubble">#Interviews</p>
              </div>
              <div className="secondRow">
                <p className="bubble">#General Career Guidance</p>
                <p className="bubble">#Technical Skills</p>
              </div>
              <div className="thirdRow">
                <p className="bubble">🧳 Product Manager</p>
                <p className="bubble">🧳 Designer</p>
                <p className="bubble">🧳 Developer</p>
              </div>
            </div>
          </div>
          <div className="pictureAndBubblesDiv2">
            <div className="bubblesDiv">
              <div className="firstRow">
                <p className="bubble">#Network Admins</p>
                <p className="bubble">#Healthcare</p>
                <p className="bubble">#Ecommerce</p>
              </div>
              <div className="secondRow">
                <p className="bubble">#AI</p>
                <p className="bubble">#Civic tech</p>
                <p className="bubble">#Education</p>
                <p className="bubble">#loT</p>
              </div>
              <div className="thirdRow">
                <p className="bubble">#Financial</p>
                <p className="bubble">#Web3</p>
                <p className="bubble">#Cyber Security</p>
                <p className="bubble">#Cloud</p>
              </div>
            </div>
            <img className="workHomeImg" src={workHome}></img>
          </div>
        </div>
      </div>
    </>
  );
}
