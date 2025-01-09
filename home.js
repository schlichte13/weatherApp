const getForcastButton = document.getElementById("getForecastButton");
const addressInput = document.getElementById("addressInput");




getForcastButton.addEventListener("click", () => {
    sessionStorage.setItem("userAddress", addressInput.value);
    location.replace("./index.html")
});


document.querySelector("#currentLocationButton").addEventListener
("click", () => {
    findMyCoordinates();
})


function findMyCoordinates(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        ((position)=>{
            sessionStorage.setItem("userLongitude", position.coords.longitude);
            sessionStorage.setItem("userLatitude", position.coords.latitude);
            location.replace("./index.html")
        },
        (err) =>{
            alert(" Cannot get current location. Please enter address");
        });
    }else{
        alert("Geolocation is not supported by your browser, please enter an address");
    }
}