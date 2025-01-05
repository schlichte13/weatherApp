let weatherData = [];

fetch('https://api.weather.gov/gridpoints/GYX/38,31/forecast')
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
        console.log(data); //Example: Logging the data to the console
        weatherData = JSON.stringify(data);
        console.log(weatherData);
        //document.getElementById('output').textContent = JSON.stringify(data);

        //JSON.filter?
    })
    .catch(error => {
        //Handle any errors here
        console.error(error); //Example: Logging the error to the console
    });
    

