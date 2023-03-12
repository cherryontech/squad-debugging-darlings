import React, { useState } from "react";
import { ProgressBar, LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../CSS/ProgressBarForm.css";

const ProgressBarForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValid, setIsValid] = useState(false);

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

  const handleContinueClick = () => {
    // move to next step of questionnaire
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate />
        <h1>Hello, welcome to Cherry on Tech!</h1>
        <h2>Tell us a bit about yourself.</h2>
        <div className="input-container">
          <label> First Name</label>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label> Last Name</label>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Button
            disabled={!isValid}
            variant="contained"
            onClick={handleContinueClick}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgressBarForm;
