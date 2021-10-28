/*
Render weather data to page:
temp in F or C - high and low
city name
barometric pressure
description

Grab all 4 HTML elements
Convert temp to C/F
display data into 4 HTML elements
*/

var inputFieldEl = document.querySelector("#city");
var btn = document.querySelector("#get-weather");
var tempEl = document.querySelector("#temp");
var cityEl = document.querySelector("#city-name");
var pressureEl = document.querySelector("#pressure");
var descriptionEl = document.querySelector("#description");

// Fetches data of a given city
function fetchData() {
    var cityName = inputFieldEl.value;
    var apiKey = '162c997af48d86f877c2812ef39f3538';
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);

            // Retrieving and converting temps
            var highTemp = weatherData.main.temp_max;
            highTemp = highTemp -273.15;
            var lowTemp = weatherData.main.temp_min;
            lowTemp = lowTemp -273.15;


            // Text content
            tempEl.textContent = "Highs of " + highTemp + " and lows of " + lowTemp + ".";
            cityEl.textContent = weatherData.name;
            pressureEl.textContent = "Extremely high pressure of: " + weatherData.main.pressure;
            descriptionEl.textContent = weatherData.weather[0].description;
            
        });
    
    inputFieldEl.value = "";
}

function displayTemp() {
    
}

btn.addEventListener("click", fetchData);