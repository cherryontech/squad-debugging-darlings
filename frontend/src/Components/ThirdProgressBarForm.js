import React, { useState, useEffect, useContext, useCallback } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import RoleCard from "../common/RoleCard";
import "../CSS/ThirdProgressBarForm.css";
import { Button, FormControl, Card, Box } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "40%",
  },
  button: {
    height: "60px",
    width: "245px",
  },
});

const ThirdProgressBarForm = () => {
  const classes = useStyles();
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [role, setRole] = useState("");

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

      const { role } = response.data;
      setRole(role);
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile
  useEffect(() => {
    getUserProfile();
  }, []);

  const handleClick = useCallback(
    (role) => () => {
      setRole(role);
    },
    [setRole]
  );

  const handleContinueClick = async () => {
    // handle continue button click
    try {
      let data = JSON.stringify({
        role,
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
      <div className="third-progress-bar-form-container">
        <LinearDeterminate page={3} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a little bit about yourself.</h2>
        <div className="mode-container"></div>
        <p>Choose a mode to get started!</p>

        <FormControl className={classes.root}>
          <Card value={"Mentor"} onClick={handleClick("Mentor")}>
            <RoleCard value={"Mentor"} />
          </Card>
          <Card value={"Mentee"} onClick={handleClick("Mentee")}>
            <RoleCard value={"Mentee"} />
          </Card>
        </FormControl>
        <Box display="flex" justifyContent="space-evenly" width="40%">
          <Button className={classes.button} variant="contained">
            Back
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleContinueClick}
          >
            Continue
          </Button>
        </Box>
      </div>
    </>
  );
};

export default ThirdProgressBarForm;
