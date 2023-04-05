import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { CardActionArea } from "@mui/material";
import mentor from "../assets/images/mentor.png";
import mentee from "../assets/images/mentee.png";
import pm from "../assets/images/pm.png";
import developer from "../assets/images/developer.png";
import designer from "../assets/images/designer.png";
// import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // flexDirection: "row",
    // position: "absolute",
    width: "212px",
    height: "220px",

    // background: "#F9F9F9",
    // boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    // borderradius: "16px",
  },
});

export default function ActionAreaCard({ value }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={
            value === "Mentor"
              ? mentor
              : value === "Project Manager"
              ? pm
              : value === "Designer"
              ? designer
              : value === "Developer"
              ? developer
              : mentee
          }
          // image={value === 'Mentor' ? mentor : mentee}
          // alt={}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            As a {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
