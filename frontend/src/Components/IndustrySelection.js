import React, { useState } from "react";
import { Button, Chip, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../CSS/SecondProgressBarForm.css";
import { LinearDeterminate } from "./ProgressBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "50%",
  },
  button: {
    height: "60px",
    width: "245px",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "20px",
  },
});

const IndustrySelection = ({ industryQuestion, matchedWith }) => {
  const classes = useStyles();
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [isAnyIndustriesSelected, setIsAnyIndustriesSelected] = useState(false);

  const handleSelectIndustry = (industry) => {
    if (selectedIndustries.length < 5 && !selectedIndustries.includes(industry)) {
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

  return (
    <>
      <Nav showLogoutButton={true} />
      <div className="menteeRoleContainer">
        <LinearDeterminate page={2} />
        <h1 className="welcome">Let's get you matched!</h1>
        <h2 className="tellus">
          Answer the following questions to get matched with a compatible {matchedWith}.
        </h2>
        <p>
          {industryQuestion}
        </p>
        <div className={classes.root}>
  <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" m={-2} p={2} spacing={2}>
    {[      "Healthcare",      "Finance",      "Web3",      "Ecommerce",      "Education",      "Game",      "Energy",      "Hospitality",      "Transportation",      "Construction",      "Media",      "Telecommunications",      "Agriculture",      "Government",      "Nonprofit",      "Other",    ].map((industry) => (
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
          color={selectedIndustries.includes(industry) ? "success" : undefined}
          disabled={isAnyIndustriesSelected}
        />
      </Box>
    ))}
    <Box m={1}>
      <Chip
        label="I'm open to any industries"
        clickable
        onClick={isAnyIndustriesSelected ? handleDeselectAnyIndustries : handleSelectAnyIndustries}
        color={isAnyIndustriesSelected ? "success" : undefined}
      />
    </Box>
  </Box>
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
            className={classes.button}
            variant="contained"
            disabled={!isAnyIndustriesSelected && selectedIndustries.length === 0}
          style={{
            backgroundColor: isAnyIndustriesSelected || selectedIndustries.length > 0 ? "green" : "",
            color: isAnyIndustriesSelected || selectedIndustries.length > 0 ? "white" : ""
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