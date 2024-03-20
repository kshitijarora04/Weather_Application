const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e38ddd1e9cmsh512203960005a45p1d75eajsn0947c3ceaa6a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    cityName.innerHTML = city;
    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            max_temp.innerHTML = result.max_temp
            min_temp.innerHTML = result.min_temp
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset
            temp.innerHTML = result.temp
            wind_degrees.innerHTML = result.wind_degrees
            wind_speed.innerHTML = result.wind_speed

        } catch (error) {
            console.error(error);
        }
    })();
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})

function list1(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct1.innerHTML = result.cloud_pct
            feels_1.innerHTML = result.feels_like;
            humidity_1.innerHTML = result.humidity;
            max_temp1.innerHTML = result.max_temp;
            min_temp1.innerHTML = result.min_temp;
            sunrise1.innerHTML = result.sunrise;
            sunset1.innerHTML = result.sunset;
            temp_1.innerHTML = result.temp;
            wind_deg1.innerHTML = result.wind_degrees;
            wind_speed1.innerHTML = result.wind_speed;
        } catch (error) {
            console.error(error);
        }
    })();
}
list1('Kolkata');

function list2(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct2.innerHTML = result.cloud_pct;
            feels_2.innerHTML = result.feels_like;
            humidity_2.innerHTML = result.humidity;
            max_temp2.innerHTML = result.max_temp;
            min_temp2.innerHTML = result.min_temp;
            sunrise2.innerHTML = result.sunrise;
            sunset2.innerHTML = result.sunset;
            temp_2.innerHTML = result.temp;
            wind_deg2.innerHTML = result.wind_degrees;
            wind_speed2.innerHTML = result.wind_speed;
        } catch (error) {
            console.error(error);
        }
    })();
}
list2('Mumbai');

function list3(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct3.innerHTML = result.cloud_pct;
            feels_3.innerHTML = result.feels_like;
            humidity_3.innerHTML = result.humidity;
            max_temp3.innerHTML = result.max_temp;
            min_temp3.innerHTML = result.min_temp;
            sunrise_3.innerHTML = result.sunrise;
            sunset_3.innerHTML = result.sunset;
            temp_3.innerHTML = result.temp;
            wind_deg3.innerHTML = result.wind_degrees;
            wind_speed3.innerHTML = result.wind_speed;
        } catch (error) {
            console.error(error);
        }
    })();
}
list3('Bangalore');

function list4(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // Update table cells with data
            cloud_pct4.innerHTML = result.cloud_pct;
            feels_4.innerHTML = result.feels_like;
            humidity_4.innerHTML = result.humidity;
            max_temp4.innerHTML = result.max_temp;
            min_temp4.innerHTML = result.min_temp;
            sunrise_4.innerHTML = result.sunrise;
            sunset_4.innerHTML = result.sunset;
            temp_4.innerHTML = result.temp;
            wind_deg4.innerHTML = result.wind_degrees;
            wind_speed4.innerHTML = result.wind_speed;
        } catch (error) {
            console.error(error);
        }
    })();
}
list4('Hyderabad');
