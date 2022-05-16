const APIKEY = "5f0bb6357badd6d05806d51ccad5ac5a";

const askCity = document.querySelector(".askCity")
const submit = document.querySelector(".submit")



//function createMeteo() {
   




const dataMeteo = document.querySelector(".dataMeteo")

const city = document.createElement("div")
city.id = "city"
city.className = "box"

const temp = document.createElement("div")

temp.id = "temp"
temp.className = "box"

const clouds = document.createElement("div")

clouds.id = "clouds"
clouds.className = "box"

const wind = document.createElement("div")

wind.id = "wind"
wind.className = "box"

dataMeteo.appendChild(city)
dataMeteo.appendChild(temp)
dataMeteo.appendChild(clouds)
dataMeteo.appendChild(wind)




let apiCall = function (cityz) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityz}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        const meteoList = data.res;
        console.log(data);

        city.innerHTML = data.name;
        document.querySelector("#temp").innerHTML = 
        "<img src='temp.png'>" + Math.trunc(data.main.temp) + "º";
        document.querySelector("#clouds").innerHTML = 
        "<i class='fas fa-droplet'></i>" + data.weather[0].description ;
        document.querySelector("#wind").innerHTML = "<img src='wind.png'>" +
          data.wind.speed + 'km/h'; 
    })
    .catch(err => console.log('Erreur : ' + err));

}

document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let citys = document.querySelector('.askCity').value;

    apiCall(citys)
})

apiCall('Bruxelles')
