import React, { useState, useEffect, useContext } from "react";
import "../CSS/MatchCard.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";

const MentorCard = ({ role, user }) => {
  console.log({ role, user })
  return (
    <div className="card">
      <div className="nameDiv">
        <p className="bold-text">{user.firstName} {user.lastName}</p>
        <p>{user.pronouns}</p>
        <p>{user.title}</p>
      </div>
      <div className="industryDiv">
        <p className="bold-text">Industry</p>
        {/* <p> TODO: SHow the industries</p> */}
      </div>
      <div className="strengthDiv">
        <p className="bold-text">Strength</p>
        {/* <p>{user.strengths.(" ")}</p> */}
      </div>
      {
        role === "Mentee" ?
          <button className="clickMe" disabled>
            Book chat
          </button> : <></>
      }

    </div>
  );
}

export default function MatchCard() {
  // const { token } = useContext(AuthContext);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NWEwMjc4ZS0xMmEzLTQ3YWEtYWRiMy0yNWNjZmQzYWJmY2YiLCJpYXQiOjE2ODE2NjMzNjZ9.gbUJqmMcCuQH5VbkUtqGBHhyceT8PKqZbrvQeknlNxc";
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [matchedUsers, setMatchedUsers] = useState([]);

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
      const matchingUsers = response.data;
      setMatchedUsers(matchingUsers);
    } catch (error) {
      console.error(error);
    }
  };

  // TODO: Need to useCallBack instead of useEffect or Memo
  useEffect(() => {
    getMatches();
  }, [setMatchedUsers, matchedUsers]);

  return (
    <>
      {matchedUsers.map((matchedUser) => (
        <MentorCard key={matchedUser.userId} role={matchedUser.role} user={matchedUser} />
      ))}
    </>
  );
}
