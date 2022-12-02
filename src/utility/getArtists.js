const getArtists = async () => {
  

  const response = await fetch(
    `http://localhost:3333/artists`
  );
  const artist = await response.json();
  console.log('from getArtists: ', artist);
  
  return artist
  };
  
  export default getArtists;