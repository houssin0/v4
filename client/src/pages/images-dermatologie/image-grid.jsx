import React, { useState, useEffect } from "react";
import { Box, Button, Grid, styled, MenuItem, Menu } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/SearchInput";
import ImageCard from "./image-card";
import { useNavigate, useLocation } from "react-router-dom";
import { ImageList } from "./image-list";
import { DiseaseList } from "../diseases-dermatologie/disease-list";

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));

const ImageGrid = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState("Filter");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Sort");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const option = params.get('option') || 'Sort';
    const disease = params.get('disease') || 'Filter';
    setSortOption(option);
    setSelectedDisease(disease);
  }, [location.search]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setFilterAnchorEl(null);
    setSortAnchorEl(null);
  };

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    setFilterAnchorEl(null);
    const params = new URLSearchParams(location.search);
    if (disease !== "Filter") {
      params.set('disease', disease);
    } else {
      params.delete('disease');
    }
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleSort = (option) => {
    setSortOption(option);
    setSortAnchorEl(null);
    const params = new URLSearchParams(location.search);
    if (option !== "None") {
      params.set('option', option);
    } else {
      params.delete('option');
    }
    navigate(`?${params.toString()}`, { replace: true });
  };

  const sortedImages = ImageList.sort((a, b) => {
    switch (sortOption) {
      case "Name":
        return a.title.localeCompare(b.title);
      case "Newest First":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "Oldest First":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return 0;
    }
  });

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput images={ImageList} onSearch={handleSearch} />
        <Box>
          <Button variant="outlined" onClick={handleFilterClick}>
            {selectedDisease}
          </Button>
          <Menu
            id="filter-menu"
            anchorEl={filterAnchorEl}
            open={Boolean(filterAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleDiseaseSelect("Filter")}>All</MenuItem>
            {DiseaseList.map((disease) => (
              <MenuItem key={disease.id} onClick={() => handleDiseaseSelect(disease.title)}>
                {disease.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleSortClick}>
            {sortOption}
          </Button>
          <Menu
            id="sort-menu"
            anchorEl={sortAnchorEl}
            open={Boolean(sortAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSort("None")}>None</MenuItem>
            <MenuItem onClick={() => handleSort("Name")}>Name</MenuItem>
            <MenuItem onClick={() => handleSort("Newest First")}>Newest First</MenuItem>
            <MenuItem onClick={() => handleSort("Oldest First")}>Oldest First</MenuItem>
          </Menu>
        </Box>
        <Button variant="contained" onClick={() => navigate("/dashboard/add-image")}>
          Add New Image
        </Button>
      </StyledFlexBox>

      <Grid container spacing={3}>
        {sortedImages.filter((image) =>
          (selectedDisease === "Filter" || image.diseaseTitle === selectedDisease) &&
          (searchTerm === "" || image.title.toLowerCase().includes(searchTerm.toLowerCase()))
        ).map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGrid;
