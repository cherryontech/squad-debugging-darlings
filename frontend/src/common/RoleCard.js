import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mentor from "../mentor.png";
import mentee from "../mentee.png";

export default function ActionAreaCard({ value }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={value === 'Mentor' ? mentor: mentee}
          alt="green iguana"
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
