const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff767e4328msh1e046858adf5ee7p1d514ejsna061cb708393',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// For  Default Major city Weather
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

// For Other Default Cities
// 1. Delhi
const getWeather2 = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct3a.innerHTML = response.cloud_pct
        temp3a.innerHTML = response.temp
        feels_like3a.innerHTML = response.feels_like
        humidity3a.innerHTML = response.humidity
        min_temp3a.innerHTML = response.min_temp
        max_temp3a.innerHTML = response.max_temp
        wind_speed3a.innerHTML = response.wind_speed
        wind_degrees3a.innerHTML = response.wind_degrees
        sunrise3a.innerHTML = response.sunrise
        sunset3a.innerHTML = response.sunset
    })
    .catch((err) => { console.error(err) })
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather2("Delhi");

// 2. New York
const getWeather3 = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct3b.innerHTML = response.cloud_pct
        temp3b.innerHTML = response.temp
        feels_like3b.innerHTML = response.feels_like
        humidity3b.innerHTML = response.humidity
        min_temp3b.innerHTML = response.min_temp
        max_temp3b.innerHTML = response.max_temp
        wind_speed3b.innerHTML = response.wind_speed
        wind_degrees3b.innerHTML = response.wind_degrees
        sunrise3b.innerHTML = response.sunrise
        sunset3b.innerHTML = response.sunset
    })
    .catch((err) => { console.error(err) })
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather3("New York");

// 3. London
const getWeather4 = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct3c.innerHTML = response.cloud_pct
        temp3c.innerHTML = response.temp
        feels_like3c.innerHTML = response.feels_like
        humidity3c.innerHTML = response.humidity
        min_temp3c.innerHTML = response.min_temp
        max_temp3c.innerHTML = response.max_temp
        wind_speed3c.innerHTML = response.wind_speed
        wind_degrees3c.innerHTML = response.wind_degrees
        sunrise3c.innerHTML = response.sunrise
        sunset3c.innerHTML = response.sunset
    })
    .catch((err) => { console.error(err) })
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather4("London");

// 4. Paris
const getWeather5 = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct3d.innerHTML = response.cloud_pct
        temp3d.innerHTML = response.temp
        feels_like3d.innerHTML = response.feels_like
        humidity3d.innerHTML = response.humidity
        min_temp3d.innerHTML = response.min_temp
        max_temp3d.innerHTML = response.max_temp
        wind_speed3d.innerHTML = response.wind_speed
        wind_degrees3d.innerHTML = response.wind_degrees
        sunrise3d.innerHTML = response.sunrise
        sunset3d.innerHTML = response.sunset
    })
    .catch((err) => { console.error(err) })
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather5("Paris");

getWeather("Srinagar"); 

