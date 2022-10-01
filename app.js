const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res) => {

  const url = "https://api.weatherapi.com/v1/current.json?key=bc2d984055fb45e3b6d134335220110&q=Oulu&aqi=no";

  https.get(url, (response) =>{
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temperature = weatherData.current.temp_c;
      res.send("The temperature in Oulu, Finland is " + "<em>" + temperature + "</em>" + " degree celcius. ");
    } )
  } )

})

app.listen(3000, ()=> {
    console.log("Server listening at port 3000");

});
