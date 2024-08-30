const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '201ed0206amsh3c1a20e91184765p177709jsn5929f5ff22c2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
    cityName.innerHTML = city;
    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            feels_like.innerHTML = result.current.feelslike_c + `&deg;C`
            humidity.innerHTML = result.current.humidity
            temp_f.innerHTML = result.current.temp_f + `&deg;F`
            dew_point.innerHTML=result.current.dewpoint_c+`&deg;C`
            precip.innerHTML = result.current.precip_mm+` mm`
            cloud_cov.innerHTML=result.current.cloud+ `%`
            temp.innerHTML = result.current.temp_c
            wind_degrees.innerHTML = result.current.wind_degree
            wind_speed.innerHTML = result.current.wind_kph

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
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=` + city;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct1.innerHTML = result.current.temp_c + `&deg;C`
            temp_1.innerHTML = result.current.temp_f + `&deg;F`
            feels_1.innerHTML = result.current.feelslike_c + `&deg;C`
            humidity_1.innerHTML = result.current.humidity +`%`
            min_temp1.innerHTML = result.current.wind_degree+`&deg`
            max_temp1.innerHTML = result.current.dewpoint_c+`&deg;C`
            wind_speed1.innerHTML = result.current.wind_kph+` km/hr`;
            wind_deg1.innerHTML = result.current.precip_mm+` mm`;
            sunrise1.innerHTML = result.current.cloud+` %`
        } catch (error) {
            console.error(error);
        }
    })();
}
list1('Kolkata');

function list2(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=` + city;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct2.innerHTML = result.current.temp_c + `&deg;C`;
            temp_2.innerHTML = result.current.temp_f + `&deg;F`;
            feels_2.innerHTML = result.current.feelslike_c + `&deg;C`;
            humidity_2.innerHTML = result.current.humidity +`%`;
            min_temp2.innerHTML = result.current.wind_degree+`&deg`;
            max_temp2.innerHTML = result.current.dewpoint_c+`&deg;C`;
            wind_speed2.innerHTML = result.current.wind_kph+` km/hr`;
            wind_deg2.innerHTML = result.current.precip_mm+` mm`;
            sunrise2.innerHTML = result.current.cloud+` %`;
        } catch (error) {
            console.error(error);
        }
    })();
}
list2('Mumbai');

function list3(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=` + city;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update table cells with data
            cloud_pct3.innerHTML = result.current.temp_c + `&deg;C`;
            temp_3.innerHTML = result.current.temp_f + `&deg;F`;
            feels_3.innerHTML = result.current.feelslike_c + `&deg;C`;
            humidity_3.innerHTML = result.current.humidity +`%`;
            min_temp3.innerHTML = result.current.wind_degree+`&deg`;
            max_temp3.innerHTML = result.current.dewpoint_c+`&deg;C`;
            wind_speed3.innerHTML = result.current.wind_kph+` km/hr`;
            wind_deg3.innerHTML = result.current.precip_mm+` mm`;
            sunrise3.innerHTML = result.current.cloud+` %`;
        } catch (error) {
            console.error(error);
        }
    })();
}
list3('Bangalore');

function list4(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=` + city;

    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // Update table cells with data
            cloud_pct4.innerHTML = result.current.temp_c + `&deg;C`;
            temp_4.innerHTML = result.current.temp_f + `&deg;F`;
            feels_4.innerHTML = result.current.feelslike_c + `&deg;C`;
            humidity_4.innerHTML = result.current.humidity +`%`;
            min_temp4.innerHTML = result.current.wind_degree+`&deg`;
            max_temp4.innerHTML = result.current.dewpoint_c+`&deg;C`;
            wind_speed4.innerHTML = result.current.wind_kph+` km/hr`;
            wind_deg4.innerHTML = result.current.precip_mm+` mm`;
            sunrise4.innerHTML = result.current.cloud+` %`;
        } catch (error) {
            console.error(error);
        }
    })();
}
list4('Hyderabad');
