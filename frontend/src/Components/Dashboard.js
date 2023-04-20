import React, { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import MatchCard from "../common/MatchCard";
import Footer from "./Footer";
import "../CSS/Dashboard.css";

import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { api } from "../api/api";

const Dashboard = () => {
  const { token } = useContext(AuthContext);

  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [role, setRole] = useState("");

  const getUserProfile = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${api.users.userProfile}/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.request(config);

      const { role } = response.data;
      setRole(role);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  console.log(role, "lalalal");
  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="matchesContainer">
        <div className="exclamation">
          <h2>
            The talented {role === "Mentor" ? "mentees" : "mentors"} who have
            been matched with you
          </h2>
          <h3>
            Book a chat with awesome {role === "Mentor" ? "mentees" : "mentors"}
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
