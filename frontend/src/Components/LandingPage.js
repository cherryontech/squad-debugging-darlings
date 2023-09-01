import React from "react";
import "../CSS/LandingPage.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import InspireOthers from "../assets/images/InspireOthers.png";
import Writing from "../assets/images/Writing.png";
import workHome from "../assets/images/workHome.png";
import ExampleCard from "../common/ExampleCard";
import Footer from "./Footer";

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
            <img className="inspireOthersImg" src={InspireOthers} alt="inspire"></img>
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
            <img className="writingImg" src={Writing} alt="writing"></img>
            <div className="bubblesDiv">
              <div className="firstRow">
                <div className="bubble">
                  <p>#Career Switching</p>
                </div>
                <div className="bubble">
                  <p>#Portfolio</p>
                </div>
                <div className="bubble">
                  <p>#Interviews</p>
                </div>
              </div>
              <div className="secondRow">
                <div className="bubble">
                  <p>#General Career Guidance</p>
                </div>
                <div className="bubble">
                  <p>#Technical Skills</p>
                </div>
              </div>
              <div className="thirdRow">
                <div className="bubble">
                  <p>🧳 Product Manager</p>
                </div>
                <div className="bubble">
                  <p>🧳 Designer</p>
                </div>
                <div className="bubble">
                  <p>🧳 Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pictureAndBubblesDiv2">
            <div className="bubblesDiv">
              <div className="firstRow">
                <div className="bubble">
                  <p>#Network Admins</p>
                </div>
                <div className="bubble">
                  <p>#Healthcare</p>
                </div>
                <div className="bubble">
                  <p>#Ecommerce</p>
                </div>
              </div>
              <div className="secondRow">
                <div className="bubble">
                  <p>#AI</p>
                </div>
                <div className="bubble">
                  <p>#Civic tech</p>
                </div>
                <div className="bubble">
                  <p>#Education</p>
                </div>
                <div className="bubble">
                  <p>#loT</p>
                </div>
              </div>
              <div className="thirdRow">
                <div className="bubble">
                  <p>#Financial</p>
                </div>
                <div className="bubble">
                  <p>#Web3</p>
                </div>
                <div className="bubble">
                  <p>#Cyber Security</p>
                </div>
                <div className="bubble">
                  <p>#Cloud</p>
                </div>
              </div>
            </div>
            <img className="workHomeImg" src={workHome} alt="work home"></img>
          </div>
        </div>
        <div className="container-three">
          <div className="header">
            <h2>
              A group of certified mentors with expertise in various areas.
            </h2>
            <p>
              These exceptional mentors are ready and waiting to help you reach
              your goals.
            </p>
          </div>
          <div className="cardsContainer">
            <ExampleCard />
            <ExampleCard />
            <ExampleCard />
          </div>
        </div>
        <div className="container-four">
          <div className="header">
            <h2 className="FAQ">FAQ</h2>
          </div>
          <div className="explanation">
            <div className="container">
              <p className="bold-text">How much does it cost?</p>
              <p>
                Good question! We don’t charge any fees from users. With our
                program, you'll have access to top-notch professional mentors
                who are eager to help <br></br>you achieve your career goals,
                all at no cost to you.
              </p>
            </div>
            <div className="container">
              <p className="bold-text">
                How do you match mentees with the right mentors?
              </p>
              <p>
                We provide a unique matching survey that helps us effectively
                evaluate your specific needs to match mentees with the right
                mentors. By answering a <br></br>few quick questions, we’ll be
                able to determine your best fit.
              </p>
            </div>
            <div className="container">
              <p className="bold-text">How are mentors verified?</p>
              <p>
                We provide a unique matching survey that helps us effectively
                evaluate your specific needs to match mentees with the right
                mentors. By answering a <br></br> few quick questions, we’ll be
                able to determine your best fit.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
