
var DEFAULT_WEATHER_API_LINK ='https://api.weather.gov/gridpoints/GYX/';
var WEATHER_API_LINK = 'https://api.weather.gov/gridpoints/GYX/38,31/forecast';

let dayZeroDetailedForecast;
let dayZeroName;
let dayOneDetailedForecast;
let dayOneName;
let dayTwoDetailedForecast;
let dayTwoName;

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

        //Getting the weather data for each day
        dayZeroDetailedForecast = data.properties.periods[0].detailedForecast;
        dayZeroName = data.properties.periods[0].name;

        dayOneDetailedForecast = data.properties.periods[1].detailedForecast;
        dayOneName = data.properties.periods[1].name;

        dayTwoDetailedForecast = data.properties.periods[2].detailedForecast;
        dayTwoName = data.properties.periods[2].name;

        //Sending the weather data to the HTML
        document.getElementById('name2').textContent = dayOneName;
        document.getElementById('output2').textContent = dayOneDetailedForecast;

        document.getElementById('name1').textContent = dayZeroName;
        document.getElementById('output1').textContent = dayZeroDetailedForecast;

        document.getElementById('name3').textContent = dayTwoName;
        document.getElementById('output3').textContent = dayTwoDetailedForecast;  
    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });
}