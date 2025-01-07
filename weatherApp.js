var WEATHER_API_LINK = 'https://api.weather.gov/points/';
var FINAL_WEATHER_API_LINK;

let dayZeroDetailedForecast;
let dayZeroName;
let dayOneDetailedForecast;
let dayOneName;
let dayTwoDetailedForecast;
let dayTwoName;

const getForecastButton = document.getElementById("getForecastButton");
getForecastButton.addEventListener("click", () => {
    localizeWeatherAPI();
    updateContent();
})

function localizeWeatherAPI(){
    let inputState = document.querySelector("#sateInput").value
    if(inputState !== ""){
        console.log(inputState);
        setLongAndLat(inputState);
        console.log(longitude);
        console.log(latitude);
        setLocalizedApi(longitude,latitude);
    }
}

function setLocalizedApi(longitude, latitude){
    fetch(WEATHER_API_LINK+latitude+','+longitude)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        FINAL_WEATHER_API_LINK = data.properties.forecast;
        console.log(FINAL_WEATHER_API_LINK);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    function printData(){
        setLongAndLat("NH");
        console.log("log: "+longitude+" | lat: "+latitude);
    }
}

function updateContent(){
    fetch(FINAL_WEATHER_API_LINK)
    .then(response => {
        if (response.ok){
            return response.json(); //Parse the response data as JSON
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
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
        console.error(error); //Example: Logging the error to the console
    });
}