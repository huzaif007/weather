const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff767e4328msh1e046858adf5ee7p1d514ejsna061cb708393',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })

    .catch((err) => { console.error(err) })
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Srinagar"); 
