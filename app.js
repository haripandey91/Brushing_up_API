const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res) => {

  const url = "https://api.weatherapi.com/v1/current.json?key=bc2d984055fb45e3b6d134335220110&q=Oulu&aqi=no";

  https.get(url, (response) =>{
    console.log(response.statusCode);
  } )

})

app.listen(3000, ()=> {
    console.log("Server listening at port 3000");

});
