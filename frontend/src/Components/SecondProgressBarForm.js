import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

const SecondProgressBarForm = () => {
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [pronoun, setPronoun] = React.useState("");

  const getUserProfile = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://localhost:3000/users/userProfile/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.request(config);

      const { pronoun } = response.data;
      setPronoun(pronoun);
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile
  useEffect(() => {
    getUserProfile();
  }, []);

  const handleChange = (event) => {
    setPronoun(event.target.value);
  };

  const handleBackClick = () => {
    // handle back button click
  };

  const handleContinueClick = async () => {
    // handle continue button click
    try {
      let data = JSON.stringify({
        pronoun,
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
                value={pronoun || ""}
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
              <Link
                className="continue-button"
                to="/setup-profile-3"
                style={{ textDecoration: "none" }}
              >
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
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SecondProgressBarForm;
