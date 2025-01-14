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

let dayZeroDetailedForecast;
let dayZeroName;
let dayZeroIcon;
let dayOneDetailedForecast;
let dayOneName;
let dayOneIcon;
let dayTwoDetailedForecast;
let dayTwoName;
let dayTwoIcon;
let dayThreeDetailedForecast;
let dayThreeName;
let dayThreeIcon;
let dayFourDetailedForecast;
let dayFourName;
let dayFourIcon;
let dayFiveDetailedForecast;
let dayFiveName;
let dayFiveIcon;
let daySixDetailedForecast;
let daySixName;
let daySixIcon;
let daySevenDetailedForecast;
let daySevenName;
let daySevenIcon;
let dayEightDetailedForecast;
let dayEightName;
let dayEightIcon;
let dayNineDetailedForecast;
let dayNineName;
let dayNineIcon;
let dayTenDetailedForecast;
let dayTenName;
let dayTenIcon;
let dayElevenDetailedForecast;
let dayElevenName;
let dayElevenIcon;
let dayTwelveDetailedForecast;
let dayTwelveName;
let dayTwelveIcon;
let dayThirteenDetailedForecast;
let dayThirteenName;
let dayThirteenIcon;


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
            dayZeroDetailedForecast = data3.properties.periods[0].detailedForecast;
            dayZeroName = data3.properties.periods[0].name;
            dayZeroIcon = data3.properties.periods[0].icon;
    
            dayOneDetailedForecast = data3.properties.periods[1].detailedForecast;
            dayOneName = data3.properties.periods[1].name;
            dayOneIcon = data3.properties.periods[1].icon;
    
            dayTwoDetailedForecast = data3.properties.periods[2].detailedForecast;
            dayTwoName = data3.properties.periods[2].name;
            dayTwoIcon = data3.properties.periods[2].icon;

            dayThreeDetailedForecast = data3.properties.periods[3].detailedForecast;
            dayThreeName = data3.properties.periods[3].name;
            dayThreeIcon = data3.properties.periods[3].icon;

            dayFourDetailedForecast = data3.properties.periods[4].detailedForecast;
            dayFourName = data3.properties.periods[4].name;
            dayFourIcon = data3.properties.periods[4].icon;

            dayFiveDetailedForecast = data3.properties.periods[5].detailedForecast;
            dayFiveName = data3.properties.periods[5].name;
            dayFiveIcon = data3.properties.periods[5].icon;

            daySixDetailedForecast = data3.properties.periods[6].detailedForecast;
            daySixName = data3.properties.periods[6].name;
            daySixIcon = data3.properties.periods[6].icon;

            daySevenDetailedForecast = data3.properties.periods[7].detailedForecast;
            daySevenName = data3.properties.periods[7].name;
            daySevenIcon = data3.properties.periods[7].icon;

            dayEightDetailedForecast = data3.properties.periods[8].detailedForecast;
            dayEightName = data3.properties.periods[8].name;
            dayEightIcon = data3.properties.periods[8].icon;

            dayNineDetailedForecast = data3.properties.periods[9].detailedForecast;
            dayNineName = data3.properties.periods[9].name;
            dayNineIcon = data3.properties.periods[9].icon;

            dayTenDetailedForecast = data3.properties.periods[10].detailedForecast;
            dayTenName = data3.properties.periods[10].name;
            dayTenIcon = data3.properties.periods[10].icon;

            dayElevenDetailedForecast = data3.properties.periods[11].detailedForecast;
            dayElevenName = data3.properties.periods[11].name;
            dayElevenIcon = data3.properties.periods[11].icon;

            dayTwelveDetailedForecast = data3.properties.periods[12].detailedForecast;
            dayTwelveName = data3.properties.periods[12].name;
            dayTwelveIcon = data3.properties.periods[12].icon;

            dayThirteenDetailedForecast = data3.properties.periods[13].detailedForecast;
            dayThirteenName = data3.properties.periods[13].name;
            dayThirteenIcon = data3.properties.periods[13].icon;
    
            //Sending the weather data to the HTML
            document.getElementById('name2').textContent = dayOneName;
            document.getElementById('output2').textContent = dayOneDetailedForecast;
            document.getElementById('icon2').src = dayOneIcon;
    
            document.getElementById('name1').textContent = dayZeroName;
            document.getElementById('output1').textContent = dayZeroDetailedForecast;
            document.getElementById('icon1').src = dayZeroIcon;
    
            document.getElementById('name3').textContent = dayTwoName;
            document.getElementById('output3').textContent = dayTwoDetailedForecast;
            document.getElementById('icon3').src = dayTwoIcon;

            document.getElementById('name4').textContent = dayThreeName;
            document.getElementById('output4').textContent = dayThreeDetailedForecast;
            document.getElementById('icon4').src = dayThreeIcon;

            document.getElementById('name5').textContent = dayFourName;
            document.getElementById('output5').textContent = dayFourDetailedForecast;
            document.getElementById('icon5').src = dayFourIcon;

            document.getElementById('name6').textContent = dayFiveName;
            document.getElementById('output6').textContent = dayFiveDetailedForecast;
            document.getElementById('icon6').src = dayFiveIcon;

            document.getElementById('name7').textContent = daySixName;
            document.getElementById('output7').textContent = daySixDetailedForecast;
            document.getElementById('icon7').src = daySixIcon;

            document.getElementById('name8').textContent = daySevenName;
            document.getElementById('output8').textContent = daySevenDetailedForecast;
            document.getElementById('icon8').src = daySevenIcon;

            document.getElementById('name9').textContent = dayEightName;
            document.getElementById('output9').textContent = dayEightDetailedForecast;
            document.getElementById('icon9').src = dayEightIcon;

            document.getElementById('name10').textContent = dayNineName;
            document.getElementById('output10').textContent = dayNineDetailedForecast;
            document.getElementById('icon10').src = dayNineIcon;

            document.getElementById('name11').textContent = dayTenName;
            document.getElementById('output11').textContent = dayTenDetailedForecast;
            document.getElementById('icon11').src = dayTenIcon;

            document.getElementById('name12').textContent = dayElevenName;
            document.getElementById('output12').textContent = dayElevenDetailedForecast;
            document.getElementById('icon12').src = dayElevenIcon;

            document.getElementById('name13').textContent = dayTwelveName;
            document.getElementById('output13').textContent = dayTwelveDetailedForecast;
            document.getElementById('icon13').src = dayTwelveIcon;

            document.getElementById('name14').textContent = dayThirteenName;
            document.getElementById('output14').textContent = dayThirteenDetailedForecast;
            document.getElementById('icon14').src = dayThirteenIcon;

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

    //Sending the weather data to the HTML
    //document.getElementById('name4').textContent = userLatitude;
    //document.getElementById('output4').textContent = userLongitude;
    console.log(addressToCoordinatesURL);
    console.log(userLatitude, userLongitude);
    console.log(roundedLat, roundedLon);
    console.log(addressToWeatherURL);
}