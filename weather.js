window.addEventListener('load', () => {
    let longitude;
    let latitude;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            const url = "https://api.open-meteo.com/v1/forecast?";

            const api = `${url}latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

            fetch(api).then(
                apiResponse => {
                    return apiResponse.json().then(
                        data => {
                            console.log(data);
                            const {interval, temperature_2m, time, wind_speed_10m} = data.current;
                            console.log(time)
                            console.log(interval)
                            console.log(temperature_2m)
                            console.log(wind_speed_10m)
                            document.getElementById("time").textContent = time;
                        }
                    )
                }
            )
        });
    }
});