const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,"/public")))

app.get("/",(req,res)=>{
    res.sendFile('index.html', { root: path.join(__dirname) });
    
    
})

app.get("/api", async (req,res)=>{
    console.log(req._parsedUrl.query);
    let url="https://newsapi.org/v2/everything?" + req._parsedUrl.query
    let r = await axios(url);
    let a = r.data
    res.json(a);

})


app.listen(port,()=>{
    console.log(`listening to port ${port}.`)
})