import React from "react";
import "../CSS/Footer.css";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

export default function Footer() {
  return (
    <>
      <footer className="sticky-footer" style={{ backgroundColor: "#EDEFF1" }}>
        <div className="firstHalf">
          <h1 className="logo">Logo</h1>
          <p className="text">
            Discover your ideal mentor and unlock your dream job!
          </p>
        </div>
        <div className="secondHalf">
          <div className="vectors">
            <a href="https://twitter.com/cherryOnTech">
              <img className="twitterImg" src={twitter}></img>
            </a>
            <a href="https://www.linkedin.com/company/cherry-on-tech/?originalSubdomain=ca">
              <img className="linkedInImg" src={linkedin}></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
