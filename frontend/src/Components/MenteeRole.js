import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import "../CSS/ProgressBarForm.css";
import Button from "@mui/material/Button";
import PMCard from "./PMCard"
import DeveloperCard from "./DeveloperCard"
import DesignerCard from "./DesignerCard"


const MenteeRole = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (value) => {
    setSelectedCard(value);
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <LinearDeterminate page={1} />
      <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
      <h2 className="tellus">Answer the following questions to get matched with a compatible mentor.</h2>
      <div className="mode-container"></div>
      <p>What role are you interested in pursuing?</p>
      <div className="card-container">
        <PMCard onSelect={handleCardSelect} />
        <DeveloperCard onSelect={handleCardSelect} />
        <DesignerCard onSelect={handleCardSelect} />
      </div>
      <Button variant="contained" onClick={() => window.location.href = "/setup-profile-3"}>
        Back
      </Button>
      <Button variant="contained" disabled={!selectedCard}>Continue</Button>
    </>
  );
};

export default MenteeRole;