require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;
const CITY = "Los Angeles";

const apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;

axios
  .get(apiURL)
  .then((response) => {
    const weatherData = response.data;
    console.log(`Current weather in ${CITY}:`);
    console.log(`- Temperature: ${weatherData.current.temp_f}°F`);
  })
  .catch((error) => {
    console.error(
      "Eror fetching weather data:",
      error.repsonse.data.error.message
    );
  });
