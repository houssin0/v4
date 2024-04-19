import { Box, Button, Typography, Grid, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { DiseaseList } from "./disease-list";
import { ImageList } from "../images-dermatologie/image-list";
import ImageCard from "../images-dermatologie/image-card";
import React from "react";

const DiseaseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
const disease = location.state?.disease;

  const handleReturnClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Find the selected disease details
  const selectedDisease = DiseaseList.find(item => item.title === disease.title);

  // Filter the images based on the selected disease id
  const filteredImages = ImageList.filter(image => image.diseaseTitle === disease.title);

  return (
    <Box p={3}>
      <Button variant="contained" onClick={handleReturnClick} sx={{ mb: 3 }}>
        Return
      </Button>
      {selectedDisease && (
        <>
          <Typography variant="h4" gutterBottom>
            {selectedDisease.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedDisease.description}
          </Typography>
          <Divider sx={{ my: 3 }} />
        </>
      )}
      <Grid container spacing={3}>
        {filteredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DiseaseDetails;
