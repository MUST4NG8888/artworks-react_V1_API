const fetch = require('node-fetch')
const express = require("express")
const app = express()
const fs = require("fs");
const cors = require("cors");
const { response } = require('express');


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const getData = async () => {
        console.log("getdata runs");
        let response = await fetch(
        //   `http://www.wikiart.org/en/App/Painting/MostViewedPaintings?randomSeed=212&json=2&inPublicDomain={false}`
        "https://www.wikiart.org/en/api/2/MostViewedPaintings?"
        );
        let result = await response.json();
        
        const finalResult = result.data.filter(item => item.image !== "")
        const finalFinalResult = []
        for (item of finalResult) {
            item.image = item.image.replace("!Large.jpg", "")
            finalFinalResult.push(item)
        }

        return finalFinalResult 
        // return result;  
    };
    
    let artistArray = []

    const getArtists = async (token) => {
        
        console.log(token);
        let artistResponse = null
        if (token !== undefined) {
            artistResponse =  await fetch (`https://www.wikiart.org/en/api/2/UpdatedArtists?paginationToken=${token}`)
        } else {
            artistResponse =  await fetch (`https://www.wikiart.org/en/api/2/UpdatedArtists`)
        }

        let artistResult = await artistResponse.json();
        artistArray.push(artistResult.data)
        console.log("46 " + artistArray);
       
        
        if (artistResult.hasMore) {
            getArtists(artistResult.paginationToken)
        }
    };
    
    
    async function fetchMetaData() {
            
        const responses = await Promise.all(
            Array.from(
                Array(resp.data.paginationToken),
                (_, i) => fetch(`https://www.wikiart.org/en/api/2/UpdatedArtists?paginationToken=B%2bJysKoXH2DgHe1ommiseryG0VdUWjGz7yygTtUNr80%3d`)
            )
        );
        
        // do something with processedResponses here
    
    }

    const init = async () => {
        console.log("init runs");
        await getArtists();
        await console.log("55 " + artistArray);
        // let ultimateArtist = await getArtists()
        // let ultimateArray = []
        // ultimateArray.push(await getArtists())
        // ultimateArray.push(await getData())
        // console.log(ultimateArray);
        res.json(artistArray)
    };

    init();

})

app.listen(3333, () => {
    console.log(`Megy az proxyServer a 3333-es porton`)
})