import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { StyledEngineProvider } from '@mui/material/styles';
import styles from "./GalleryCard.module.css";
import { style } from "@mui/system";


const GalleryCard = ({item, clickHandler}) => {
    // console.log(item);
    const saveFavorite = async (item) => {
      console.log('item', item.title);
      
      const something = 'something'
      // let formData = new FormData()
      // formData.append('title', item.title)
      // formData.append('year', item.completitionYear)
      // formData.append('artist', item.artistName)
      // formData.append('pictureId', item.id)
      // formData.append('artistId', item.artistId)
      // for (const value of formData.values()) {
      //   console.log(value);
      // }
    const url = "http://localhost:3333/saveFavorites";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(something)
    })};
    const deleteFavorite = async (item) => {
      console.log('Sziasztok Sracok!');
      };
  

    const [favorite, setFavorite] = React.useState(false);
    const favoriteHandler = () => {
        setFavorite(!favorite);
        favorite ? deleteFavorite(item) : saveFavorite(item)
      }
    


    return (
        <StyledEngineProvider injectFirst>
        <ImageListItem id={styles.picturecard}>
          <div id={styles.container}>
          <img
            onClick={() => clickHandler(item)}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
           id={styles.topbar}
            title={favorite ? "Remove from Favourite" : "Add to Favourite" }
            position="top"
            actionIcon={
              favorite ? (
                <IconButton
                  className="icon"
                  onClick={() => favoriteHandler()}
                  sx={{ color: "orangered" }}
                  aria-label={`star ${item.title}`}
                >
                  <Favorite />
                </IconButton>
              ) : (
                <IconButton
                  className="icon"
                  onClick={favoriteHandler}
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <FavoriteBorder />
                </IconButton>
              )
            }
            actionPosition="right"
          />
          </div>
          <h2>{item.title}</h2>
          <h4>{item.artistName}</h4>
          <h5>{item.completitionYear}</h5>
        </ImageListItem>
        </StyledEngineProvider>
    );
}
 
export default GalleryCard;