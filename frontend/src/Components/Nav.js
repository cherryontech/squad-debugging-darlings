import "../CSS/Nav.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ showLogoutButton, showLoginButton, showGetStartedButton }) => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <a href="/" className="no-underline">
        <h1 className="placeholder-logo">TechTonic</h1>
      </a>

      <div className="the-button-div">
        {showLogoutButton && (
          <button className="buttons" onClick={() => navigate("/signup")}>
            Logout
          </button>
        )}
        {showLoginButton && (
          <button className="buttons" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
        {showGetStartedButton && (
          <button
            className="get-started-button"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
