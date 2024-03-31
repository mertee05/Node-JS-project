require("dotenv").config();
const express = require("express");
const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = "Los Angeles";
const apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;

const app = express();
const port = 5500;
app.listen(port, () => {
  console.log("server is running...");
});

app.use(express.json());

app.get("/home", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.post("/city", (req, res) => {
  console.log(req.body);
  var receivedCityName = req.body.CityName;
});
app.get("/city", (req, res) => {
  axios
    .get(apiURL)
    .then((response) => {
      const weatherData = response.data;
      res.send(
        `Current weather in ${receivedCityName}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
      );
    })
    .catch((error) => {
      console.error(
        "Eror fetching weather data:",
        error.repsonse.data.error.message
      );
    });
});
