import React, { useState } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import RoleCard from "../common/RoleCard";
import { Button, FormControl, Card, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import "../CSS/RoleSelection.css";

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
  },
});

const RoleSelection = ({ question, matchedWith }) => {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleClick = (value) => () => {
    setIsCardSelected(true);
    setRole(value);
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={1} />
        <h1 className="welcome">Hello, welcome to Cherry on Tech!</h1>
        <h2 className="tellus">
          Answer the following questions to get matched with a compatible{" "}
          {matchedWith}.
        </h2>
        <div className="mode-container"></div>
        <p>{question}</p>
        <FormControl className={classes.root}>
          <div className="cardsContainer">
            <Card
              value={"Product Manager"}
              onClick={handleClick("Product Manager")}
              className={
                isCardSelected && role === "Product Manager"
                  ? classes.selectedCard
                  : ""
              }
            >
              <RoleCard value={"Product Manager"} />
            </Card>
            <Card
              value={"Developer"}
              onClick={handleClick("Developer")}
              className={
                isCardSelected && role === "Developer"
                  ? classes.selectedCard
                  : ""
              }
            >
              <RoleCard value={"Developer"} />
            </Card>
            <Card
              value={"Designer"}
              onClick={handleClick("Designer")}
              className={
                isCardSelected && role === "Designer"
                  ? classes.selectedCard
                  : ""
              }
            >
              <RoleCard value={"Designer"} />
            </Card>
          </div>
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

export default RoleSelection;
