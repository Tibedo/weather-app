const APIKEY = "3a77b5b835af4f1fa7c141218221605";

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

    let url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityz}&days=5&units=metric&lang=fr`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        const meteoList = data.res;
        console.log(data);

        city.innerHTML = data.location.name;
        document.querySelector("#temp").innerHTML = 
        "<img src='thermometre.png'>" + Math.trunc(data.current.temp_c) + "º";

       let sunny = document.querySelector("#clouds")
       if (data.current.condition.text === "Partiellement nuageux") {
       sunny.innerHTML = "<img src='./day/116.png'>" + data.current.condition.text ;
        }
       else if (data.current.condition.text === "Ensoleillé") {
       sunny.innerHTML = "<img src='./day/113.png'>" + data.current.condition.text ;
        }
       else if (data.current.condition.text === "Pluie légère") {
       sunny.innerHTML = "<img src='./day/296.png'>" + data.current.condition.text ;
        }
       else if (data.current.condition.text === "Couvert") {
       sunny.innerHTML = "<img src='./day/122.png'>" + data.current.condition.text ;
        }
       else  {
       sunny.innerHTML = data.current.condition.text ;
        }

         document.querySelector("#wind").innerHTML = "<img src='wind.png'>" +
          data.current.wind_kph + 'km/h'; 
    })
    .catch(err => console.log('Erreur : ' + err));

}

document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let citys = document.querySelector('.askCity').value;

    apiCall(citys)
})

apiCall('Bruxelles')
