import "../CSS/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ showLogoutButton }) => {
  return (
    <div className="nav">
      <h1 className="placeholder-logo">Logo</h1>
      {showLogoutButton && (
        <Link className="logout-btn" to="/signup">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      )}
    </div>
  );
};

const handleLogout = () => {
  // Implement logout logic here
};

export default Nav;
