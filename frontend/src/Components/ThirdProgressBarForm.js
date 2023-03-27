import React, { useState, useEffect, useContext } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import MentorCard from "./MentorCard";
import MenteeCard from "./MenteeCard";
import "../CSS/ThirdProgressBarForm.css";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ThirdProgressBarForm = () => {
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
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

  //put the useEffect in here and invoke the fetchuserprofile
  useEffect(() => {
    getUserProfile();
  }, []);

  const handleMentorClick = () => {
    setRole("Mentor");
  };

  const handleMenteeClick = () => {
    setRole("Mentee");
  };
  const handleContinueClick = async () => {
    // handle continue button click
    try {
      let data = JSON.stringify({
        role,
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

  return (
    <>
      <Nav showLogoutButton={true} />
      <LinearDeterminate page={3} />
      <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
      <h2 className="tellus">Tell us a little bit about yourself.</h2>
      <div className="mode-container"></div>
      <p>Choose a mode to get started!</p>
      <div className="card-container">
        <FormControl>
          <MentorCard value={"Mentor"} onClick={handleMentorClick} />
          <MenteeCard value={"Mentee"} onClick={handleMenteeClick} />
        </FormControl>
      </div>
      <Button variant="contained">Back</Button>
      <Button variant="contained" onClick={handleContinueClick}>
        Continue
      </Button>
    </>
  );
};

export default ThirdProgressBarForm;
