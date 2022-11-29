import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
      {console.log(data)}
      <ImageList variant="masonry" cols={4} gap={25}>
        {data.map((item, index) => (
          <ImageListItem>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.title}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Gallery;
