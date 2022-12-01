import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/FavoriteBorder';

import styles from "./Gallery.module.css";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

function Gallery({ data }) {
  

  
  return (

    <div id={styles.wrapper}>
      <ImageList   variant="masonry" cols={4} gap={20}>
        {data.map((item, index) => (
          <ImageListItem>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
             <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              // title="Add to Favourite"
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <Favorite />
                </IconButton>
              }
              actionPosition="right"
            />
            <h3>{item.title}</h3>
            <h5>{item.artistName}</h5>
            <h6>{item.completitionYear}</h6>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
      );
}

export default Gallery;
