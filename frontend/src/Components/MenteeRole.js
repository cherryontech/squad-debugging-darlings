import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import "../CSS/ProgressBarForm.css";
import Button from "@mui/material/Button";
import PMCard from "./PMCard"
import DeveloperCard from "./DeveloperCard"
import DesignerCard from "./DesignerCard"
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

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
      <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
          <Link to="/setup-profile-3" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                border: "3px solid #027800",
                color: "green",
              }}
            >
              Back
            </Button>
          </Link>
      <Button variant="contained" disabled={!selectedCard}>Continue</Button>
      </Box>
    </>
  );
};

export default MenteeRole;