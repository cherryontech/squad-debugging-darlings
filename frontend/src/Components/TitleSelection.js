import { Box, Button, Card, FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/RoleSelection.css";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";
import RoleCard from "../common/RoleCard";
import Nav from "./Nav";
import { LinearDeterminate } from "./ProgressBar";



const useStyles = makeStyles({
  root: {
    display: "flex",
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
    margin: 10,
  },
  wrapper: {
    margin: 10,
  },
});

const TitleSelection = ({ question, matchedWith }) => {
  const classes = useStyles();
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [title, setTitle] = useState("");
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

      const { title, role} = response.data;
      setRole(role);
      setTitle(title);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleClick = useCallback(
    (title) => () => {
      setTitle(title);
      setIsCardSelected(true);
    },
    [setTitle]
  );

  const handleContinueClick = async () => {
    try {
      let data = JSON.stringify({
        title,

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
      navigate("/mentor-flow-2");
       } else {
         navigate("/mentee-flow-2");
       }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={1} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">
          Answer the following questions to get matched with a<br></br>
          compatible {matchedWith}.
        </h2>
        <div className="mode-container"></div>
        <p>{question}</p>
        <FormControl className={classes.root}>
          <div className="cardsContainer">
            <Card
              value={"Product Manager"}
              onClick={handleClick("Product Manager")}
              className={
                isCardSelected && title === "Product Manager"
                  ? classes.selectedCard
                  : classes.wrapper
              }
            >
              <RoleCard value={"Product Manager"} />
            </Card>
            <Card
              value={"Developer"}
              onClick={handleClick("Developer")}
              className={
                isCardSelected && title === "Developer"
                  ? classes.selectedCard
                  : classes.wrapper
              }
            >
              <RoleCard value={"Developer"} />
            </Card>
            <Card
              value={"Designer"}
              onClick={handleClick("Designer")}
              className={
                isCardSelected && title === "Designer"
                  ? classes.selectedCard
                  : classes.wrapper
              }
            >
              <RoleCard value={"Designer"} />
            </Card>
          </div>
        </FormControl>
        <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
          <Link to="/setup-profile-3" style={{ textDecoration: "none" }}>
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
              backgroundColor: isCardSelected && title ? "green" : "",
              color: isCardSelected && title ? "white" : "",
            }}
          >
            Continue
          </Button>
        </Box>
      </div>
    </>
  );
};

export default TitleSelection;