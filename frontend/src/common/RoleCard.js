import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mentor from "../mentor.png";
import mentee from "../mentee.png";
import pm from "../pm.png";
import developer from "../developer.png";
import designer from "../designer.png";

export default function ActionAreaCard({ value }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{
        alignItems: "center",
        justifyContent: "center"
      }}>
        <CardMedia
          component="img"
          height="140"
          image={value === 'Mentor' ? mentor :
                value === 'Product Manager' ? pm :
                value === 'Designer' ? designer :
                value === 'Developer' ? developer :
                mentee}
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
