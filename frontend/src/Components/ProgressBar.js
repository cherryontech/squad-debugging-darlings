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
      }}
    >
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
