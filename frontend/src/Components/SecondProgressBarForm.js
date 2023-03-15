import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SecondProgressBarForm = () => {
  const [pronoun, setPronoun] = React.useState("");

  const handleChange = (event) => {
    setPronoun(event.target.value);
  };

  const handleBackClick = () => {
    // handle back button click
  };

  const handleContinueClick = () => {
    // handle continue button click
  };
  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="second-progress-bar-form-container">
        <LinearDeterminate page={2} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a little bit about yourself.</h2>
        <div className="pronoun-container">
          <label> What are your pronouns? </label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pronouns</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pronoun}
                label="Pronouns"
                onChange={handleChange}
              >
                <MenuItem value="She/Her">She/Her</MenuItem>
                <MenuItem value="He/Him">He/Him</MenuItem>
                <MenuItem value="They/Them">They/Them</MenuItem>
                <MenuItem value="Xe/Xem">Xe/Xem</MenuItem>
                <MenuItem value="Ze/Zir">Ze/Zir</MenuItem>
              </Select>
            </FormControl>
            <Link className="back-button" to="/setup-profile1">
              <Button onClick={handleBackClick}>Back</Button>
            </Link>
            <Button onClick={handleContinueClick}>Continue</Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SecondProgressBarForm;
