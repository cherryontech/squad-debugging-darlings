import React, { useState, useEffect, useContext } from "react";
import "../CSS/MatchCard.css";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { AuthContext } from "../Context/AuthContext";
// import { api } from "../api/api";

function MentorCard() {
  return (
    <div className="card">
      <div className="nameDiv">
        <p className="bold-text">mentor.name</p>
        <p>mentor.gender</p>
        <p>mentor.title</p>
      </div>
      <div className="industryDiv">
        <p className="bold-text">Industry</p>
        <p>mentor.industries.join(" ")</p>
      </div>
      <div className="strengthDiv">
        <p className="bold-text">Strength</p>
        <p>mentor.strengths.join(" ")</p>
      </div>
      <button className="clickMe" disabled>
        Book chat
      </button>
    </div>
  );
}

export default function MatchCard() {
  // const { token } = useContext(AuthContext);
  // const decoded = jwt_decode(token);
  // const [userId, setUserId] = useState(decoded.userId);
  // const [mentors, setMentors] = useState([]);

  // const getMatches = async () => {
  //   try {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `${api.users.userProfile}/${userId}`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await axios.request(config);

  //     const { mentors } = response.data;
  //     setMentors(mentors);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getMatches();
  // }, []);

  return (
    <>
      {/* {mentors.map((mentor) => ( */}
      <MentorCard />
      {/* ))} */}
    </>
  );
}
