import React, { useState } from "react";
import { ProgressBar, LinearDeterminate } from "./ProgressBar";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { makeStyles } from "@material-ui/core/styles";

// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, Button, LinearProgress } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     borderRadius: 3,
//     border: 0,
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   },
// });

const ProgressBarForm = () => {
  // const classes = useStyles();
  //   const [progress, setProgress] = useState(0);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // do something with the form data
  //     // update progress state as needed
  //     setProgress(100);
  //   };

  return (
    <div>
      <Nav />
      <LinearDeterminate />
      <h1>Hello, welcome to Cherry on Tech!</h1>
      <h2>Tell us a bit about yourself.</h2>
      <label> First Name</label>
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <label> Last Name</label>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <Button disabled variant="contained">
        Continue
      </Button>
      {/* <form className={classes.root} onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <LinearProgress variant="determinate" value={progress} /> */}
    </div>
  );
};

export default ProgressBarForm;
