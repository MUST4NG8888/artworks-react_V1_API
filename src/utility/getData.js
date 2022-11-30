const getData = async () => {
  
    const response = await fetch('http://localhost:3333')
    const result = await response.json()
    console.log(result);
    return result

  // let response = await fetch(
  //   `https://www.wikiart.org/en/api/2/PaintingSearch?term=Picasso&authSessionKey=71c274e585d9`
  // );
  // let result = await response.json();
  
  return result;  
};

export default getData;


