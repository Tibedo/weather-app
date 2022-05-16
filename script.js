const APIKEY = "4414dd5f45e32c43fc8581846e9d9593";

const askCity = document.querySelector(".askCity")
const submit = document.querySelector(".submit")

submit.addEventListener("click", () => {
    meteoApi
})

let dataMeteo = document.querySelector(".dataMeteo")

let city = document.createElement("div")
city.id = "city"
city.className = "box"

let temp = document.createElement("div")
temp.id = "temp"
temp.className = "box"

let humidity = document.createElement("div")
humidity.id = "humidity"
humidity.className = "box"

let wind = document.createElement("div")
wind.id = "wind"
wind.className = "box"

dataMeteo.appendChild(city)
dataMeteo.appendChild(temp)
dataMeteo.appendChild(humidity)
dataMeteo.appendChild(wind)



let url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Brussels&appid=${APIKEY}`;

fetch(url)
   .then(res => res.json())
  .then(data => {
    const meteoList = data.res;
    console.log(data);
    document.querySelector("#city").innerHTML = data.city.name
    document.querySelector("#temp").innerHTML = data.city.main.temp
    document.querySelector("#humidity").innerHTML = data.city.main.humidity + '%'
    document.querySelector("#wind").innerHTML = data.city.wind.speed + 'km/h'
})