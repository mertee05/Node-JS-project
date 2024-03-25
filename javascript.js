let data = document.getElementById("data");
let fetchButton = document.getElementById("fetch-button");
let weatherReport = document.getElementById("weather-report");

fetchButton.addEventListener("click", () => {
  var city = inputData.value;
  inputData.value = "";
  console.log("valuecleared");
});

fetch("/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: JSON.stringify({ data: data }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
