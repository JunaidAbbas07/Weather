
const Key = "cce8d1326bc7548d71119a2a5b37193c";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Rawalpindi";

const temp = document.querySelector('.degree');
const percent = document.querySelector('.percent');
const speed = document.querySelector('.speed');
const weather = document.querySelector('.weather-img')

async function fetchWeather() {

    const response = await fetch(Url + `&appid=${Key}`);
    const data = await response.json();


    speed.innerHTML = data.wind.speed + "km/h";
    percent.innerHTML = data.main.humidity + "%";
    temp.innerHTML = (Math.round(data.main.temp)) + "°C";

    if ((data.weather[0].main) == 'Clouds') {
        weather.src = "./images/clouds.png";
    }
    else if ((data.weather[0].main) == 'Clear') {
        weather.src = "./images/clear.png";
    }
    else if ((data.weather[0].main) == 'Rain') {
        weather.src = "./images/rain.png";
    }
    else if ((data.weather[0].main) == 'Mist') {
        weather.src = "./images/mist.png";
    }
    else if ((data.weather[0].main) == 'Drizzle') {
        weather.src = "./images/drizzle.png";
    }

    else if ((data.weather[0].main) == 'Snow') {
        weather.src = "./images/snow.png";
    }

}

fetchWeather();


