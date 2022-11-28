import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Box from '@mui/material/Box';
import styles from "./Gallery.module.css"

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));


function Gallery({ data }) {
  return (
    <div id={styles.wrapper}>
      {console.log(data)}
      <Masonry columns={3} spacing={2} >
        {data.records.map((item, index) => (
          <div>
            <Label>{index + 1}</Label>
            <img key={index} src={item.primaryimageurl} style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',  }}></img>
          </div>
        ))}
      </Masonry>
      </div>
  );
}

export default Gallery;
