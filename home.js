const getForcastButton = document.getElementById("getForecastButton");
const addressInput = document.getElementById("addressInput");

getForcastButton.addEventListener("click", () => {
    sessionStorage.setItem("userAddress", addressInput.value);
    location.replace("./index.html")
});