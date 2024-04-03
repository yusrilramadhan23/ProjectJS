const apiKey = "169d57f473867552f327437fdfe507e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    // console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "assets/images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "assets/images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }    
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);  
    console.log(searchBox.value)
})
