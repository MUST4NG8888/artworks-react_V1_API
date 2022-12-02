const fetch = require("node-fetch");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const { response } = require("express");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const getData = async () => {
    let response = await fetch(
      "https://www.wikiart.org/en/api/2/MostViewedPaintings?&imageFormat=HD"
    );
    let result = await response.json();

    const finalResult = result.data.filter((item) => item.image !== "");
    res.json(finalResult);
  };

  getData();
});

app.get("/artists", (req, res) => {
  
  const getArtists = async (token) => {
    let artistResponse = null;
    if (token !== undefined) {
      artistResponse = await fetch(
        `https://www.wikiart.org/en/api/2/UpdatedArtists?paginationToken=${token}`
      );
    } else {
      artistResponse = await fetch(
        `https://www.wikiart.org/en/api/2/UpdatedArtists`
      );
    }

    let artistResult = await artistResponse.json();

    let artistArray = [];
    artistArray.push(artistResult.data);
    res.json(artistArray);
  };

  getArtists();



// function paginated_fetch(
//   url = 'https://www.wikiart.org/en/api/2/UpdatedArtists', // Improvised required argument in JS
//   page = "",
//   previousResponse = []
// ) {
//   return fetch(`${url}?paginationToken=${page}`) // Append the page number to the base URL
//     .then(response => response.json())
//     .then(newResponse => {
//       const response = [...previousResponse.data, ...newResponse.data]; // Combine the two arrays

//       if (newResponse.hasMore) {
//         page == newResponse.paginationToken

//         return paginated_fetch(url, page, response);
//       }

//       res.json(response)
//     });
// }
// paginated_fetch()


// const fetchAllPages = (url) => fetch (url)
//   .then (res => res .json ())
//   .then (
//     ({items, continuationToken: token}) => token
//       ? fetchAllPages (addToken (url, token)) .then (newItems => [...items, ...newItems])
//       : items
//   )

//   fetchAllPages('https://www.wikiart.org/en/api/2/UpdatedArtists?')



// async function fetchRequest(url) {
//   try {
//     // Fetch request and parse as JSON
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log(data)
//     // Extract the url of the response's "next" relational Link header
//     let next_page;
//     if( data.hasMore)
//         next_page = `https://www.wikiart.org/en/api/2/UpdatedArtists?paginationToken=${data.paginationToken}`;

//     // If another page exists, merge it into the array
//     // Else return the complete array of paginated output
//     if (data.hasMore) {
//       let temp_data = await fetchRequest(next_page); 
//       data = data.data.concat(temp_data);
//     }
  
//     res.json(data);
//   } catch (err) {
//     return console.error(err);
//   }
// }

// fetchRequest(`https://www.wikiart.org/en/api/2/UpdatedArtists`)

});

app.post("/pba", (req, res) => {
  const id = req.body.id;
  const getPainting = async () => {
    artistResponse = await fetch(
      `https://www.wikiart.org/en/api/2/PaintingsByArtist?id=${id}&imageFormat=HD`
    );
    let artistResult = await artistResponse.json();
    res.json(artistResult);
  };

  getPainting();
});

app.post("/pbsearch", (req, res) => {
  

  const searchTerm = req.body.term;
  console.log(searchTerm);
  const getPbSearch = async () => {
    paintingsBySearch = await fetch(
      `https://www.wikiart.org/en/api/2/PaintingSearch?term=${searchTerm}&imageFormat=HD`
    );
    let paintings = await paintingsBySearch.json();
    res.json(paintings);
  };

  getPbSearch();
});

app.listen(3333, () => {
  console.log(`Megy az proxyServer a 3333-es porton`);
});
