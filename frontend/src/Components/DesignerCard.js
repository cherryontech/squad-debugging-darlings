import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import designer from "../designer.png";

export default function ActionAreaCard(props) {
  const { onSelect } = props;
  
  const handleCardClick = () => {
    if (onSelect) {
      onSelect("Designer");
    }
  };

    return (
      <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={designer}
            alt="Designer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Designer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }