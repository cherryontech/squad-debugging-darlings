import React, { useState, useEffect, useContext } from "react";
import { Button, Chip, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../CSS/SecondProgressBarForm.css";
import { LinearDeterminate } from "./ProgressBar";
// import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
// import jwt_decode from "jwt-decode";
import { api } from "../api/api";

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
  }
});

const MentorshipType = ({ question, matchedWith }) => {
  const classes = useStyles();
  const [mentorship, setMentorship] = useState([]);
  // const { token } = useContext(AuthContext);
  // const decoded = jwt_decode(token);
  // const [userId, setUserId] = useState(decoded.userId);
  // const [role, setRole] = useState("");
  const [isAnyMentorshipsSelected, setIsAnyMentorshipsSelected] = useState(false);
  const [selectedMentorships, setSelectedMentorships] = useState([]);
  // const navigate = useNavigate();

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

      const { mentorship, role } = response.data;
      setMentorship(mentorship);
      setRole(role);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleSelectMentorship = (mentorship) => {
    if (selectedMentorships.length < 3 && !selectedMentorships.includes(mentorship)) {
      setSelectedMentorships([...selectedMentorships, mentorship]);
    }
  };

  const handleDeleteMentorship = (mentorship) => {
    setSelectedMentorships(selectedMentorships.filter((i) => i !== mentorship));
  };

  const handleSelectAnyMentorships = () => {
    setSelectedMentorships([]);
    setIsAnyMentorshipsSelected(true);
  };

  const handleDeselectAnyMentorships = () => {
    setIsAnyMentorshipsSelected(false);
  };

  const handleContinueClick = async () => {
    try {
      let data = JSON.stringify({
        mentorship,
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
      const response = await axios.request(config);
      console.log(response.data);
      if (role.toLowerCase() === "mentor") {
        navigate("/mentor-flow-4");
         } else {
           navigate("/mentee-flow-4");
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
          Answer the following questions to get matched with a compatible {matchedWith}.
        </h2>
        <p>{question}</p>
        <div className={classes.root}>
        <div className="chipContainer">

  <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" m={-2} p={2} spacing={2}>
    {[ "Technical Skills", "Networking", "Resume", "Portfolio", "General Career Guidance", "Imposter Syndrome", "Interviews", "Career Switching" ].map((mentorship) => (
      <Box key={mentorship} m={1}>
        <Chip
          label={mentorship}
          clickable
          onClick={() => handleSelectMentorship(mentorship)}
          onDelete={
            selectedMentorships.includes(mentorship)
              ? () => handleDeleteMentorship(mentorship)
              : undefined
          }
          color={selectedMentorships.includes(mentorship) ? "success" : undefined}
          disabled={isAnyMentorshipsSelected}
        />
      </Box>
    ))}
  </Box>
  </div>
</div>

        <Box display="flex" justifyContent="space-evenly" mt={"15pt"}>
        <Link to="" style={{ textDecoration: "none" }}>
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
            disabled={!isAnyMentorshipsSelected && selectedMentorships.length === 0}
            style={{
            backgroundColor: isAnyMentorshipsSelected || selectedMentorships.length > 0 ? "green" : "",
            color: isAnyMentorshipsSelected || selectedMentorships.length > 0 ? "white" : ""
          }}
          >
            Finish
          </Button>
          </Box>
      </div>
    </>
  );
};

export default MentorshipType;