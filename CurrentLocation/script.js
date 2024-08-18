const button = document.getElementById("get-location-button");

async function getData(lat, long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e0510295f3ec4c6abbe90427241708&q=${lat},${long}&aqi=yes` 
    );
    return await promise.json();
}

async function gotLocation(position) {
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log(result);
}

function failedToGet() 
{
    console.log("There was some issue");
}

button.addEventListener("click", async() => {
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
});