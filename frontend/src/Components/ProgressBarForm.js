import React, { useState, useEffect } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../CSS/ProgressBarForm.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProgressBarForm = () => {
  const [userId, setUserId] = useState("45a0278e-12a3-47aa-adb3-25ccfd3abfcf");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/userProfile/${userId}`
      );
      const { firstName, lastName, id } = response.data;
      setFirstName(firstName);
      setLastName(lastName);
      setUserId(id);
      setIsValid(validateInput(firstName, lastName));
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setIsValid(validateInput(event.target.value, lastName));
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsValid(validateInput(firstName, event.target.value));
  };

  const validateInput = (firstName, lastName) => {
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(firstName) && regex.test(lastName);
  };

  const handleContinueClick = async () => {
    try {
      let data = JSON.stringify({
        firstName,
        lastName,
      });
      let config = {
        method: "patch",
        maxBodyLength: Infinity,
        url: `http://localhost:3000/users/userProfile/${userId}`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NWEwMjc4ZS0xMmEzLTQ3YWEtYWRiMy0yNWNjZmQzYWJmY2YiLCJpYXQiOjE2Nzk1MTQ0MjN9.xMqOi2PfGABNJiZjdlgtcDeqOelYg1KQjku3jZEMyMw",
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
      <div className="progress-bar-form-container">
        <LinearDeterminate page={1} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a bit about yourself.</h2>
        <div className="input-container">
          <label> First Name</label>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ width: "671.85px", marginBottom: "2rem" }}
          />
          <label> Last Name</label>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Link
            className="continue-button"
            to="/setup-profile-2"
            style={{ textDecoration: "none" }}
          >
            <Box textAlign="center">
              <Button
                disabled={!isValid}
                variant="contained"
                onClick={handleContinueClick}
                sx={{
                  backgroundColor: "#027800",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  width: "245px",
                  height: "60px",
                  marginTop: "4rem",
                }}
              >
                Continue
              </Button>
            </Box>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProgressBarForm;
