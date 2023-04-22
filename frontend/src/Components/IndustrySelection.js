import { Box, Button, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/SecondProgressBarForm.css";
import { AuthContext } from "../Context/AuthContext";
import { api } from "../api/api";
import Nav from "./Nav";
import { LinearDeterminate } from "./ProgressBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "60px",
    width: "245px",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "20px",
  },
});

const IndustrySelection = ({ question, matchedWith }) => {
  const classes = useStyles();
  const [industry, setIndustry] = useState([]);
  const { token } = useContext(AuthContext);
  const decoded = jwt_decode(token);
  const [userId, setUserId] = useState(decoded.userId);
  const [role, setRole] = useState("");
  const [isAnyIndustriesSelected, setIsAnyIndustriesSelected] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
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

      const { industry, role } = response.data;
      setIndustry(industry);
      setRole(role);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleSelectIndustry = (industry) => {
    if (
      selectedIndustries.length < 5 &&
      !selectedIndustries.includes(industry)
    ) {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const handleDeleteIndustry = (industry) => {
    setSelectedIndustries(selectedIndustries.filter((i) => i !== industry));
  };

  const handleSelectAnyIndustries = () => {
    setSelectedIndustries([]);
    setIsAnyIndustriesSelected(true);
  };

  const handleDeselectAnyIndustries = () => {
    setIsAnyIndustriesSelected(false);
  };

  const handleContinueClick = async () => {
    try {
      let data = JSON.stringify({
        industry: selectedIndustries,
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
      if (role.toLowerCase() === "mentor") {
        navigate("/mentor-flow-3");
      } else {
        navigate("/mentee-flow-3");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={2} />
        <h1 className="welcome">Let's get you matched!</h1>
        <h2 className="tellus">
          Answer the following questions to get matched with a compatible{" "}
          {matchedWith}.
        </h2>
        <p>{question} Select up to 5 industries of interest!</p>
        <div className={classes.root}>
          <div className="chipContainer">
            <Box m={1} style={{ marginTop: "52px" }}>
              <Chip
                label="I'm open to any industries"
                clickable
                onClick={
                  isAnyIndustriesSelected
                    ? handleDeselectAnyIndustries
                    : handleSelectAnyIndustries
                }
                color={isAnyIndustriesSelected ? "success" : undefined}
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              alignItems="center"
              m={-2}
              p={2}
              spacing={2}
            >
              {[
                "Healthcare",
                "Finance",
                "Web3",
                "Ecommerce",
                "Education",
                "Game",
                "Robotics",
                "B2B",
                "B2C",
                "Sports",
                "Civic tech",
                "Cloud",
                "AI",
                "loT",
                "Cyber Security",
                "Network Admin",
              ].map((industry) => (
                <Box key={industry} m={1}>
                  <Chip
                    label={industry}
                    clickable
                    onClick={() => handleSelectIndustry(industry)}
                    onDelete={
                      selectedIndustries.includes(industry)
                        ? () => handleDeleteIndustry(industry)
                        : undefined
                    }
                    color={
                      selectedIndustries.includes(industry)
                        ? "success"
                        : undefined
                    }
                    disabled={isAnyIndustriesSelected}
                  />
                </Box>
              ))}
            </Box>
          </div>
        </div>

        <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
          <Link
            to={role === "Mentor" ? "/mentor-flow-1" : "/mentee-flow-1"}
            style={{ textDecoration: "none" }}
          >
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
            onClick={handleContinueClick}
            className={classes.button}
            variant="contained"
            disabled={
              !isAnyIndustriesSelected && selectedIndustries.length === 0
            }
            style={{
              backgroundColor:
                isAnyIndustriesSelected || selectedIndustries.length > 0
                  ? "green"
                  : "",
              color:
                isAnyIndustriesSelected || selectedIndustries.length > 0
                  ? "white"
                  : "",
            }}
          >
            Continue
          </Button>
        </Box>
      </div>
    </>
  );
};

export default IndustrySelection;
