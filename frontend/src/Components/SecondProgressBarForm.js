import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "../CSS/SecondProgressBarForm.css";
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

  const isContinueButtonDisabled = !pronoun;

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
              <InputLabel shrink={false} id="demo-simple-select-label">
                Pronouns
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pronoun}
                label="Pronouns"
                onChange={handleChange}
                style={{ width: "674px" }}
              >
                <MenuItem value="She/Her">She/Her</MenuItem>
                <MenuItem value="He/Him">He/Him</MenuItem>
                <MenuItem value="They/Them">They/Them</MenuItem>
                <MenuItem value="Xe/Xem">Xe/Xem</MenuItem>
                <MenuItem value="Ze/Zir">Ze/Zir</MenuItem>
              </Select>
            </FormControl>
            <div className="button-div">
              <Link
                className="back-button"
                to="/setup-profile-1"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundColor: "white",
                    border: "3px solid green",
                    width: "245px",
                    height: "60px",
                    textTransform: "none",
                    fontSize: "20px",
                    color: "green",
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                  onClick={handleBackClick}
                >
                  Back
                </Button>
              </Link>
              <Button
                sx={{
                  width: "245px",
                  fontSize: "20px",
                  color: "white",
                  height: "60px",
                  textTransform: "none",
                  backgroundColor: isContinueButtonDisabled
                    ? "#DBDBDC"
                    : "green",
                }}
                disabled={isContinueButtonDisabled}
                onClick={handleContinueClick}
              >
                Continue
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SecondProgressBarForm;
