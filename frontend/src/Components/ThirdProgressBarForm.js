import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import MentorCard from "./MentorCard";
import MenteeCard from "./MenteeCard";
import "../CSS/ThirdProgressBarForm.css";
import Button from "@mui/material/Button";

const ThirdProgressBarForm = () => {
  return (
    <>
      <Nav showLogoutButton={true} />
      <LinearDeterminate page={3} />
      <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
      <h2 className="tellus">Tell us a little bit about yourself.</h2>
      <div className="mode-container"></div>
      <p>Choose a mode to get started!</p>
      <div className="card-container">
        <MentorCard />
        <MenteeCard />
      </div>
      <Button variant="contained">Back</Button>
      <Button variant="contained">Continue</Button>
    </>
  );
};

export default ThirdProgressBarForm;
