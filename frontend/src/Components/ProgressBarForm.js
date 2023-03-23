import React, { useState, useEffect } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../CSS/ProgressBarForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ProgressBarForm = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  console.log(decoded.userId, "decoded");
  console.log(token, "token");
  const [userId, setUserId] = useState(decoded.userId);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValid, setIsValid] = useState(false);

  // const getUserProfile = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/users/userProfile/${userId}`,
  //       {
  //         firstName: firstName,
  //         lastName: lastName,
  //       }
  //     );
  //     console.log(response, "response, lalalal");
  //     const { firstName, lastName, id } = response.data;
  //     console.log(response.data, "lalalalala");
  //     setFirstName(firstName);
  //     setLastName(lastName);
  //     setUserId(id);
  //     setIsValid(validateInput(firstName, lastName));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // //put the useEffect in here and invoke the fetchuserprofile
  // useEffect(() => {
  //   getUserProfile();
  // }, [userId, firstName, lastName]);

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
