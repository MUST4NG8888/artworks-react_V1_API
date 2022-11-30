const fetch = require('node-fetch')
const express = require("express")
const app = express()
const fs = require("fs");
const cors = require("cors")


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const getData = async () => {
        let response = await fetch(
          `https://www.wikiart.org/en/api/2/PaintingSearch?term=Leonardo`
        );
        let result = await response.json();
        
        const finalResult = result.data
        console.log(finalResult);
        res.json(finalResult) 
        // return result;  
    };
    getData()
})

app.listen(3333, () => {
    console.log(`Megy az proxyServer a 3333-es porton`)
})