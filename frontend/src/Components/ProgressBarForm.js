import React, { useState, useEffect, useContext } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../CSS/ProgressBarForm.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { api } from "../api/api";
import { Grid, Paper } from "@mui/material";

const ProgressBarForm = () => {
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValid, setIsValid] = useState(false);

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

      const { firstName, lastName } = response.data;
      setFirstName(firstName);
      setLastName(lastName);
      setIsValid(validateInput(firstName, lastName));
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile
  useEffect(() => {
    getUserProfile();
  }, []);

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
        url: `${api.users.userProfile}/${userId}`,
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
      <div className="progress-bar-form-container">
        <LinearDeterminate page={1} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a bit about yourself.</h2>

        <div className="input-container">
          {/* <label> First Name</label> */}
          <p>First Name</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ width: "671.85px", marginBottom: "2rem" }}
          />
          {/* <label> Last Name</label> */}
          <p>Last Name</p>
          <TextField
            id="outlined-basic"
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
                  "&:hover": { backgroundColor: "#027800" },
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
