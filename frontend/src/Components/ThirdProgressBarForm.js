import { Box, Button, Card, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";
import RoleCard from "../common/RoleCard";
import Nav from "./Nav";
import { LinearDeterminate } from "./ProgressBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    height: "60px",
    width: "245px",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "20px",
  },
  selectedCard: {
    border: "2px solid green",
  },
});

const ThirdProgressBarForm = () => {
  const classes = useStyles();
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [role, setRole] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(false);
  const navigate = useNavigate();

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
      setIsCardSelected(true);
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
        url: `${api.users.userProfile}/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      await axios.request(config);
      if (role === "Mentor") {
        navigate("/mentor-flow-1");
      } else {
        navigate("/mentee-flow-1");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={3} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Tell us a little bit about yourself.</h2>
        <div className="mode-container"></div>
        <p>Choose a mode to get started!</p>

        <FormControl className={classes.root}>
          <Card
            value={"Mentor"}
            onClick={handleClick("Mentor")}
            className={
              isCardSelected && role === "Mentor" ? classes.selectedCard : ""
            }
          >
            <RoleCard value={"Mentor"} />
          </Card>
          <Card
            value={"Mentee"}
            onClick={handleClick("Mentee")}
            className={
              isCardSelected && role === "Mentee" ? classes.selectedCard : ""
            }
          >
            <RoleCard value={"Mentee"} />
          </Card>
        </FormControl>
        <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
          <Link to="/setup-profile-2" style={{ textDecoration: "none" }}>
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
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleContinueClick}
            disabled={!isCardSelected}
            style={{
              backgroundColor: isCardSelected && role ? "green" : "",
              color: isCardSelected && role ? "white" : "",
            }}
          >
            Continue
          </Button>
        </Box>
      </div>
    </>
  );
};

export default ThirdProgressBarForm;
