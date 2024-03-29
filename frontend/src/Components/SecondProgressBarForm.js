import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/SecondProgressBarForm.css";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";
import Nav from "./Nav";
import { LinearDeterminate } from "./ProgressBar";

const SecondProgressBarForm = () => {
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [pronouns, setPronouns] = React.useState("");

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

      const { pronouns } = response.data;
      setPronouns(pronouns);
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile
  useEffect(() => {
    getUserProfile();
  }, []);

  const handleChange = (event) => {
    setPronouns(event.target.value);
  };

  const handleBackClick = () => {
    // handle back button click
  };

  const handleContinueClick = async () => {
    // handle continue button click
    try {
      let data = JSON.stringify({
        pronouns,
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
      await axios.request(config);
      
      // move to next step of questionnaire
    } catch (error) {
      console.error(error);
    }
  };

  const isContinueButtonDisabled = !pronouns;

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={2} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a little bit about yourself.</h2>
        <div className="pronoun-container">
          <label> What are your pronouns? </label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                value={pronouns || ""}
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
                to="/setup-profile-1"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "white",
                    border: "3px solid #027800",
                    color: "green",
                    height: "60px",
                    width: "245px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "20px",
                  }}
                >
                  Back
                </Button>
              </Link>
              <Link
                className="continue-button"
                to="/setup-profile-3"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundColor: "#027800",
                    color: "#FFFFFF",
                    fontWeight: "500",
                    width: "245px",
                    height: "60px",
                    "&:hover": { backgroundColor: "#027800" }
                  }}
                  disabled={isContinueButtonDisabled}
                  onClick={handleContinueClick}
                >
                  Continue
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SecondProgressBarForm;
