import React, { useState, useEffect, useContext } from "react";
import "../CSS/MatchCard.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";
import suitcase from "../assets/images/suitcase.png";
const MentorCard = ({ role, user }) => {
  return (
    <div className="card">
      <div className="nameDiv">
        <p className="bold-text">
          {user.firstName} {user.lastName}
        </p>
        <p className="pronouns">{user.pronouns}</p>
        <div className="suitcaseDiv">
          <img className="suitcase" src={suitcase} alt="suitcase"></img>
          <p>{user.title}</p>
        </div>
      </div>
      <div className="industryDiv">
        <p className="bold-text">Industry</p>
        <p>#{user.industry.join(" #")}</p>
      </div>
      <div className="strengthDiv">
        <p className="bold-text">Strength</p>
        <p>#{user.mentorship.join(" #")}</p>
      </div>
      {role === "Mentee" ? (
        <a href={user.calendly} target="_blank" aria-label="link to book a chat with calendy">
          <button className="clickMe">Book chat</button>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default function MatchCard() {
  const { token } = useContext(AuthContext);

  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [role, setRole] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);

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

  const getMatches = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${api.users.match}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.request(config);
      console.log(response)
      const matchingUsers = response.data;
      setMatchedUsers(matchingUsers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMatches();
    getUserProfile();
  }, []);

  return (
    <>
      {matchedUsers.length > 0 ? (
        matchedUsers.map((matchedUser) => (
          <MentorCard key={matchedUser.userId} role={role} user={matchedUser} />
        ))
      ) : (
        <p>No matched users found</p>
      )}
    </>
  );
}
