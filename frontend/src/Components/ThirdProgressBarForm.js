import React, { useState, useEffect, useContext } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import MentorCard from "./MentorCard";
import MenteeCard from "./MenteeCard";
import "../CSS/ThirdProgressBarForm.css";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ThirdProgressBarForm = () => {
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [selectedRole, setSelectedRole] = useState("");
  const [role, setRole] = useState("");

  const getUserProfile = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:3000/users/userProfile/${userId}`,
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

  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };

  const handleCardClick = (role) => {
    setSelectedRole(role);
  };

  const handleContinueClick = async () => {
    // handle continue button click
    try {
      let data = JSON.stringify({
        role: selectedRole,
      });
      let config = {
        method: "patch",
        maxBodyLength: Infinity,
        url: `http://localhost:3000/users/userProfile/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios.request(config);
      console.log(response.data);
      // move to next step of questionnaire
    } catch (error) {
      console.error(error);
    }
  };

  // const isContinueButtonDisabled = !role;

  return (
    <>
      <Nav showLogoutButton={true} />
      <LinearDeterminate page={3} />
      <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
      <h2 className="tellus">Tell us a little bit about yourself.</h2>
      <div className="mode-container"></div>
      <p>Choose a mode to get started!</p>
      <div className="card-container">
        <MentorCard onClick={() => handleCardClick("mentor")} />
        <MenteeCard onClick={() => handleCardClick("mentee")} />
      </div>
      <Button variant="contained">Back</Button>
      <Button
        variant="contained"
        disabled={!selectedRole}
        onClick={handleContinueClick}
      >
        Continue
      </Button>
    </>
  );
};

export default ThirdProgressBarForm;
