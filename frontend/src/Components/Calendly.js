import React, { useState, useEffect } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";
import "../CSS/Calendly.css";
// import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { api } from "../api/api";

const useStyles = makeStyles({
  button: {
    height: "60px",
    width: "245px",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "20px",
  },
});

const Calendly = () => {
  const classes = useStyles();
  //   const { token } = useContext(AuthContext);
  //   const decoded = jwt_decode(token);
  //   const [userId, setUserId] = useState(decoded.userId);
  const [calendlyURL, setCalendlyURL] = useState("");
  const [isValid, setIsValid] = useState(false);

  //   const getUserProfile = async () => {
  //     try {
  //       let config = {
  //         method: "get",
  //         maxBodyLength: Infinity,
  //         url: `${api.users.userProfile}/${userId}`,
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       const response = await axios.request(config);

  //       const { calendlyURL } = response.data;
  //       setCalendlyURL(calendlyURL);
  //       setIsValid(validateInput(calendlyURL));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUserProfile();
  //   }, []);

  const handleURLChange = (event) => {
    setCalendlyURL(event.target.value);
    setIsValid(validateInput(event.target.value, calendlyURL));
  };
  const validateInput = (calendlyURL) => {
    const regex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return regex.test(calendlyURL);
  };

  //   const handleContinueClick = async () => {
  //     try {
  //       let data = JSON.stringify({
  //         calendly,
  //       });
  //       let config = {
  //         method: "patch",
  //         maxBodyLength: Infinity,
  //         url: `${api.users.userProfile}/${userId}`,
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //         data: data,
  //       };
  //       const response = await axios.request(config);
  //       console.log(response.data);
  //       // move to next step of questionnaire
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="progress-bar-form-container">
        <LinearDeterminate page={3} />
        <h1 className="welcome">Let's get you matched!</h1>
        <h2 className="tellus">
          Enter your Calendly URL so that mentees can schedule time with you.
        </h2>
        <h3>Calendly URL</h3>
        <div className="input-container">
          <TextField
            id="outlined-basic"
            label="Calendly URL"
            variant="outlined"
            value={calendlyURL}
            onChange={handleURLChange}
            sx={{ width: "671.85px", marginBottom: "2rem" }}
          />
          <p>What is Calendly?</p>

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
              style={{
                backgroundColor: isValid && calendlyURL ? "green" : "",
                color: isValid && calendlyURL ? "white" : "",
              }}
            >
              Continue
            </Button>
          </Box>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Calendly;
