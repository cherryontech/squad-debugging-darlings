import React, { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import MatchCard from "../common/MatchCard";
import Footer from "./Footer";
import "../CSS/Dashboard.css";

// import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { api } from "../api/api";

const Dashboard = () => {
  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="matchesContainer">
        <div className="exclamation">
          <h2>The talented mentors who have been matched with you</h2>
          <h3>Book a chat with awesome mentors!</h3>
        </div>
        <div className="cardsContainer">
          <MatchCard />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
