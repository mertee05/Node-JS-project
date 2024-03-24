require("dotenv").config();
const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const API_KEY = process.env.WEATHER_API_KEY;
var apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;
var CITY = "";
const app = express();
const port = 5500;
app.use(bodyParser.json());

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// // app.use(express.static("public"));
// app.get("/index.html", function (req, res) {
//   res.sendFile(__dirname + "/" + "index.html");
// });

app.post("/MyCity", function (req, res) {
  response = {
    city_name: req.body.city_name,
  };

  console.log(response);

  var apiURL2 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${response.city_name}`;

  axios
    .get(apiURL2)
    .then((response) => {
      const weatherData = response.data;
      console.log(
        `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
      );
      res.send(
        `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
      );
    })
    .catch((error) => {
      console.error(
        "Eror fetching weather data:",
        error.response.data.error.message
      );
    });
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
