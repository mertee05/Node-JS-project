require("dotenv").config();
const express = require("express");
const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = "Los Angeles";
const apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;

const app = express();
const port = 4000;

app.get("/temp", (req, res) => {
  axios
    .get(apiURL)
    .then((response) => {
      const weatherData = response.data;
      res.send(
        `Current weather in ${CITY}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
      );
    })
    .catch((error) => {
      console.error(
        "Eror fetching weather data:",
        error.repsonse.data.error.message
      );
    });
});

app.listen(port, () => {
  console.log("server is running...");
});
