import React, { useState, useEffect, useContext, useCallback } from "react";
import { LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import "../CSS/SecondProgressBarForm.css";
import { Button, FormControl, Card, Box, Chip } from "@mui/material";
// import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { api } from "../api/api";

const IndustrySelection = () => {
  
  
    return (
      <>
        <Nav showLogoutButton={true} />
        <div className="menteeRoleContainer">
          <LinearDeterminate page={2} />

        </div>
      </>
    );
  };
  
  export default IndustrySelection;