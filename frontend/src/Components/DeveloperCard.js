import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import developer from "../developer.png";

export default function ActionAreaCard(props) {
  const { onSelect } = props;

  const handleCardClick = () => {
    if (onSelect) {
      onSelect("Developer");
    }
  };

    return (
      <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={developer}
            alt="Developer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Developer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }