require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const API_KEY = process.env.WEATHER_API_KEY;
var apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;
var CITY = "";

const app = express();
const port = 6500;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/city", (req, res) => {
  console.log(req.body);
  cityData = {
    CityName: req.body.CityName,
  };
  console.log(cityData);
});
app.get("/city", (req, res) => {
  let users = {
    myname: "Mert",
  };
  res.json(users);
});
// var CITY = cityData.CityName.value;
// var apiURL2 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${response.CityNameBE}`;

// app.get("/", (req,res)=> {
//   axios
// })

// var apiURL2 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityData.CityNameBE}`;
// axios
//   .get(apiURL2)
//   .then((response) => {
//     const weatherData = response.data;
//     console.log(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//     res.send(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//   })
//   .catch((error) => {
//     console.error(
//       "Eror fetching weather data:",
//       error.response.data.error.message
//     );
//   });

// axios
//   .get(apiURL2)
//   .then((response) => {
//     const weatherData = response.data;
//     console.log(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//     res.send(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//   })
//   .catch((error) => {
//     console.error(
//       "Eror fetching weather data:",
//       error.response.data.error.message
//     );
//   });

// app.post("/City", function (req, res) {
//   console.log(req.body);
// response = {
//   city_name: req.body.city_name,
// };

// console.log(response);

// var apiURL2 = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${response.city_name}`;

// axios
//   .get(apiURL2)
//   .then((response) => {
//     const weatherData = response.data;
//     console.log(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//     res.send(
//       `Current weather in ${response.city_name}:\n\n - Temperature: ${weatherData.current.temp_f}°F  `
//     );
//   })
//   .catch((error) => {
//     console.error(
//       "Eror fetching weather data:",
//       error.response.data.error.message
//     );
//   });
// });
