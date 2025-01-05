
const DEFAULT_WEATHER_API_LINK ='https://api.weather.gov/gridpoints/GYX/';
var WEATHER_API_LINK = 'https://api.weather.gov/gridpoints/GYX/38,31/forecast';

let weatherData = [];


const getForecastButton = document.getElementById("getForecastButton");
getForecastButton.addEventListener("click", () => {
    localizeWeatherAPI();
})

function localizeWeatherAPI(){
    let inputZipCode = document.querySelector("#zipCode").value
    if(inputZipCode !== ""){
        setLocalizedApi(38,31);
        updateContent();
    }
}

function setLocalizedApi(longitude, latitude){
    WEATHER_API_LINK = DEFAULT_WEATHER_API_LINK+longitude+','+latitude+'/forecast';
}
function updateContent(){
    fetch(WEATHER_API_LINK)
    .then(response => {
        if (response.ok){
            return response.json(); //Parse the response data as JSON
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        //Process the response data here
        //Use data according to your need
        weatherData = data.properties.periods[0].detailedForecast; //Example: Logging the data to the console
        document.getElementById('weatherForecastText').textContent = weatherData;
        //JSON.filter?
    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });
}