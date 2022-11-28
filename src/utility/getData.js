const getData = async () => {
  let response = await fetch(
    `https://api.harvardartmuseums.org/object?person="Monet"&size=50&apikey=57696d00-a401-4113-a94b-282c2baaa940`
  );
  let result = await response.json();
  return result;
    
};

export default getData;
