const inputElement = document.getElementById("myInput");
const buttonElement = document.getElementById("myButton");
const homeButton = document.getElementById("homeButton");

let addressToCoordinatesURL;
let addressToWeatherURL;
let finalWeatherURL;
let userCoordinates;
let userLatitude;
let userLongitude;
let roundedLat;
let roundedLon;

var dayForecasts = [];
var dayNames = [];
var dayIcons = [];
let i;

checkInput();

function checkInput(){
    if(sessionStorage.getItem("userAddress") !== null){
        getWeatherForAddress();
    }else{
        userLongitude = sessionStorage.getItem("userLongitude");
        userLatitude = sessionStorage.getItem("userLatitude");
        displayWeather();
    }
}


function getWeatherForAddress(){
    const userAddress= sessionStorage.getItem("userAddress");
    //userAddress = "21, Centre Street, Concord, New Hampshire, 03301, United States"
    addressToCoordinatesURL = "https://geocode.maps.co/search?q=" + userAddress + "&api_key=677c3b8539037667847106teq80457c";
    fetch(addressToCoordinatesURL)
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
        //Getting the coordinates for the given address
        console.log(data);
        console.log(data[0].lat);
        console.log(data[0].lon);
        userLatitude = data[0].lat;
        userLongitude = data[0].lon;
        displayWeather();
    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });
    
}


function displayWeather(){
    roundedLat = Math.round(userLatitude * 100) / 100;
    roundedLon = Math.round(userLongitude * 100) / 100;
    //addressToWeatherURL = 'https://api.weather.gov/gridpoints/GYX/' + roundedLat + ',' + roundedLon + '/forecast';
    addressToWeatherURL = 'https://api.weather.gov/points/' + roundedLat + ',' + roundedLon;
    fetch(addressToWeatherURL)
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data2 => {
        finalWeatherURL = data2.properties.forecast;
        fetch(finalWeatherURL)
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw new Error('API request failed');
            }
        })
        .then(data3 => {

            for (i = 0; i < 13; i++){
                dayForecasts[i] = data3.properties.periods[i].detailedForecast;
                dayNames[i] = data3.properties.periods[i].name;
                dayIcons[i] = data3.properties.periods[i].icon;
            }

            for (i = 0; i < 13; i++){
                document.getElementById('name' + i).textContent = dayNames[i];
                document.getElementById('output' + i).textContent = dayForecasts[i];
                document.getElementById('icon' + i).src = dayIcons[i];
            }

            console.log(finalWeatherURL);
        })
        .catch(error =>{
            console.error(error);
        })

    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });

    homeButton.addEventListener("click", () => {
        document.location.href="home.html"
    });

}