/*
Link javascript to HTML
get access to button
Get access to input field

create function to fetch API data when button is clicked

*/

var inputFieldEl = document.querySelector("#city");
var btn = document.querySelector("#get-weather");


function fetchData() {
    var cityName = inputFieldEl.value;
    var apiKey = '162c997af48d86f877c2812ef39f3538';
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    
    inputFieldEl.value = "";

}

btn.addEventListener("click", fetchData);