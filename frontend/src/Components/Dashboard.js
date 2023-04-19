import React, { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import MatchCard from "../common/MatchCard";
import Footer from "./Footer";
import "../CSS/Dashboard.css";

const Dashboard = ({ role }) => {
  const [matches, setMatches] = useState([]);

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="matchesContainer">
        <div className="exclamation">
          <h2>
            The talented {role === "mentee" ? "mentors" : "mentees"} who have
            been matched with you
          </h2>
          <h3>
            Book a chat with awesome {role === "mentee" ? "mentors" : "mentees"}
            !
          </h3>
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
