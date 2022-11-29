const getData = async () => {
  let response = await fetch(
    `https://www.wikiart.org/en/api/2/PaintingSearch?term=Picasso&authSessionKey=a6accbaecccc`, 
    {
      mode: "cors"
    }
  );
  let result = await response.json();
  
  console.log(result);
  return result;  
};

export default getData;
