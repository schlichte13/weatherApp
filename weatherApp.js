const inputElement = document.getElementById("myInput");
const buttonElement = document.getElementById("myButton");

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
let dayOneDetailedForecast;
let dayOneName;
let dayTwoDetailedForecast;
let dayTwoName;
let dayThreeDetailedForecast;
let dayThreeName;
let dayFourDetailedForecast;
let dayFourName;
let dayFiveDetailedForecast;
let dayFiveName;
let daySixDetailedForecast;
let daySixName;
let daySevenDetailedForecast;
let daySevenName;
let dayEightDetailedForecast;
let dayEightName;
let dayNineDetailedForecast;
let dayNineName;
let dayTenDetailedForecast;
let dayTenName;
let dayElevenDetailedForecast;
let dayElevenName;
let dayTwelveDetailedForecast;
let dayTwelveName;
let dayThirteenDetailedForecast;
let dayThirteenName;

updateContent();

function updateContent(){
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
        userLatitude = data[0].lat;
        userLongitude = data[0].lon;

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
        
                dayOneDetailedForecast = data3.properties.periods[1].detailedForecast;
                dayOneName = data3.properties.periods[1].name;
        
                dayTwoDetailedForecast = data3.properties.periods[2].detailedForecast;
                dayTwoName = data3.properties.periods[2].name;

                dayThreeDetailedForecast = data3.properties.periods[3].detailedForecast;
                dayThreeName = data3.properties.periods[3].name;

                dayFourDetailedForecast = data3.properties.periods[4].detailedForecast;
                dayFourName = data3.properties.periods[4].name;

                dayFiveDetailedForecast = data3.properties.periods[5].detailedForecast;
                dayFiveName = data3.properties.periods[5].name;

                daySixDetailedForecast = data3.properties.periods[6].detailedForecast;
                daySixName = data3.properties.periods[6].name;

                daySevenDetailedForecast = data3.properties.periods[7].detailedForecast;
                daySevenName = data3.properties.periods[7].name;

                dayEightDetailedForecast = data3.properties.periods[8].detailedForecast;
                dayEightName = data3.properties.periods[8].name;

                dayNineDetailedForecast = data3.properties.periods[9].detailedForecast;
                dayNineName = data3.properties.periods[9].name;

                dayTenDetailedForecast = data3.properties.periods[10].detailedForecast;
                dayTenName = data3.properties.periods[10].name;

                dayElevenDetailedForecast = data3.properties.periods[11].detailedForecast;
                dayElevenName = data3.properties.periods[11].name;

                dayTwelveDetailedForecast = data3.properties.periods[12].detailedForecast;
                dayTwelveName = data3.properties.periods[12].name;

                dayThirteenDetailedForecast = data3.properties.periods[13].detailedForecast;
                dayThirteenName = data3.properties.periods[13].name;
        
                //Sending the weather data to the HTML
                document.getElementById('name2').textContent = dayOneName;
                document.getElementById('output2').textContent = dayOneDetailedForecast;
        
                document.getElementById('name1').textContent = dayZeroName;
                document.getElementById('output1').textContent = dayZeroDetailedForecast;
        
                document.getElementById('name3').textContent = dayTwoName;
                document.getElementById('output3').textContent = dayTwoDetailedForecast;

                document.getElementById('name4').textContent = dayThreeName;
                document.getElementById('output4').textContent = dayThreeDetailedForecast;

                document.getElementById('name5').textContent = dayFourName;
                document.getElementById('output5').textContent = dayFourDetailedForecast;

                document.getElementById('name6').textContent = dayFiveName;
                document.getElementById('output6').textContent = dayFiveDetailedForecast;

                document.getElementById('name7').textContent = daySixName;
                document.getElementById('output7').textContent = daySixDetailedForecast;

                document.getElementById('name8').textContent = daySevenName;
                document.getElementById('output8').textContent = daySevenDetailedForecast;

                document.getElementById('name9').textContent = dayEightName;
                document.getElementById('output9').textContent = dayEightDetailedForecast;

                document.getElementById('name10').textContent = dayNineName;
                document.getElementById('output10').textContent = dayNineDetailedForecast;

                document.getElementById('name11').textContent = dayTenName;
                document.getElementById('output11').textContent = dayTenDetailedForecast;

                document.getElementById('name12').textContent = dayElevenName;
                document.getElementById('output12').textContent = dayElevenDetailedForecast;

                document.getElementById('name13').textContent = dayTwelveName;
                document.getElementById('output13').textContent = dayTwelveDetailedForecast;

                document.getElementById('name14').textContent = dayThirteenName;
                document.getElementById('output14').textContent = dayThirteenDetailedForecast;

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


        //Sending the weather data to the HTML
        //document.getElementById('name4').textContent = userLatitude;
        //document.getElementById('output4').textContent = userLongitude;
        console.log(addressToCoordinatesURL);
        console.log(userLatitude, userLongitude);
        console.log(roundedLat, roundedLon);
        console.log(addressToWeatherURL);


    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });


}


