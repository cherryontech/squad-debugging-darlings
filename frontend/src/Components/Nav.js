import "../CSS/Nav.css";
import React from "react";

const Nav = ({ showLogoutButton }) => {
  return (
    <div className="nav">
      <h1 className="placeholder-logo">LOGO</h1>
      {showLogoutButton && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

const handleLogout = () => {
  // Implement logout logic here
};

export default Nav;
