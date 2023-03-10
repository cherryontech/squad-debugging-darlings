import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, Button, LinearProgress } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const ProgressBarForm = () => {
  //   const classes = useStyles();
  //   const [progress, setProgress] = useState(0);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // do something with the form data
  //     // update progress state as needed
  //     setProgress(100);
  //   };

  return (
    <div>
      <h1>Hello World!</h1>
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
