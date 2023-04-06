import React, { useState, useContext, useEffect } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { api } from "../api/api";

const useStyles = makeStyles({
  button: {
    height: "60px",
    width: "245px",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "20px",
  },
  anchor: {
    color: "black",
  },
});

const Calendly = () => {
  const classes = useStyles();
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [calendly, setCalendly] = useState("");
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
      console.log(response.data);
      const { calendly } = response.data;
      setCalendly(calendly);
      setIsValid(validateInput(calendly));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleURLChange = (event) => {
    setCalendly(event.target.value);
    setIsValid(validateInput(event.target.value, calendly));
  };
  const validateInput = (calendly) => {
    const regex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return regex.test(calendly);
  };

  const handleContinueClick = async () => {
    try {
      let data = JSON.stringify({
        calendly,
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

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={3} />
        <h1 className="welcome">Let's get you matched!</h1>
        <h2 className="tellus">
          Enter your Calendly URL so that mentees can schedule<br></br>time with
          you.
        </h2>
        <p>Calendly URL</p>
        <div className="input-container">
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={calendly || ""}
            onChange={handleURLChange}
            sx={{ width: "671.85px" }}
          />
          <p>
            <a className={classes.anchor} href="https://calendly.com/" target="_blank">
              What is Calendly?
            </a>
          </p>

          <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
            {/* <Link to="/setup-profile-2" style={{ textDecoration: "none" }}> */}
            <Button
              className={classes.button}
              variant="outlined"
              style={{
                backgroundColor: "white",
                border: "3px solid #027800",
                color: "green",
              }}
            >
              Back
            </Button>
            {/* </Link> */}
            <Button
              className={classes.button}
              variant="contained"
              disabled={!isValid}
              onClick={handleContinueClick}
              style={{
                backgroundColor: isValid && calendly ? "green" : "",
                color: isValid && calendly ? "white" : "",
              }}
            >
              Finish
            </Button>
          </Box>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Calendly;
