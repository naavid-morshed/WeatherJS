window.addEventListener('load', func);

function func({long, lat}) {
    let longitude;
    let latitude;

    if (long == null && lat == null && navigator.geolocation) {
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
                            const part = time.split("T");
                            document.getElementById("fullDate").textContent = part[0];
                            document.getElementById("time").textContent = part[1];
                            document.getElementById("tem").textContent = part[0];
                            document.getElementById("fullDate").textContent = part[0];
                        }
                    )
                }
            )
        });
    }
}