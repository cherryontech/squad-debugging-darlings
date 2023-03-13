import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export function LinearDeterminate() {
  const [progress, setProgress] = React.useState(33);

  return (
    <Box
      sx={{
        width: "674px",
        height: "4px",
        left: "383px",
        top: "140px",
        borderRadius: 5, // add rounded corners to the progress bar
        bgcolor: "white", // change the background color of the progress bar
        "& .MuiLinearProgress-bar": {
          bgcolor: "green", // change the color of the progress bar
        },
      }}
    >
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
