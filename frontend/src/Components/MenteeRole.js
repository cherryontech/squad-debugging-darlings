import React, { useState, useEffect, useContext, useCallback } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import RoleCard from "../common/RoleCard";
import "../CSS/ProgressBarForm.css";
import { Button, FormControl, Card, Box } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { api } from "../api/api";

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

const MenteeRole = () => {
  const classes = useStyles();
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [menteePath, setMenteePath] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(false);

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

      const { menteePath } = response.data;
      setMenteePath(menteePath);
    } catch (error) {
      console.error(error);
    }
  };

  //put the useEffect in here and invoke the fetchuserprofile
  // useEffect(() => {
  //   getUserProfile();
  // }, []);

  // const handleClick = useCallback(
  //   (role) => () => {
  //     setRole(role);
  //     setIsCardSelected(true);
  //   },
  //   [setRole]
  // );

  // const handleContinueClick = async () => {
  //   // handle continue button click
  //   try {
  //     let data = JSON.stringify({
  //       role,
  //     });
  //     let config = {
  //       method: "patch",
  //       maxBodyLength: Infinity,
  //       url: `${api.users.userProfile}/${userId}`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       data: data,
  //     };
  //     const response = await axios.request(config);
  //     console.log(response.data);
  //     // move to next step of questionnaire
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={1} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">Answer the following questions to get matched with a compatible mentor.</h2>
        <div className="mode-container"></div>
        <p>What role are you interested in pursuing?</p>

        <FormControl className={classes.root}>
          <Card
            value={"Product Manager"}
            onClick={handleClick("Product Manager")}
            className={
              isCardSelected && role === "Product Manager" ? classes.selectedCard : ""
            }
          >
            <RoleCard value={"Product Manager"} />
          </Card>
          <Card
            value={"Developer"}
            onClick={handleClick("Developer")}
            className={
              isCardSelected && role === "Developer" ? classes.selectedCard : ""
            }
          >
            <RoleCard value={"Developer"} />
          </Card>
          <Card
            value={"Designer"}
            onClick={handleClick("Designer")}
            className={
              isCardSelected && role === "Designer" ? classes.selectedCard : ""
            }
          >
            <RoleCard value={"Designer"} />
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
              color: isCardSelected && role ? "white" : ""
            }}
          >
            Continue
          </Button>
        </Box>
      </div>
    </>
  );
};

export default MenteeRole;