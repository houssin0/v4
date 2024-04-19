// ImageCard.jsx
import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/dashboard/image/${image.id}`, { state: { image } });
  };

  return (
    <Card elevation={3}>
      <CardActionArea onClick={handleImageClick}>
        <CardMedia
          component="img"
          height="200"
          image={image.img}
          alt={image.title}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>
            {image.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
