import {APIKEY, UNSKEY, askCity, submit} from "./constantes.js"

export function dayThreeCall(cityz) {

    let url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityz}&days=5&units=metric&lang=fr`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            //const meteoList = data.res;
            console.log(data);

            city.innerHTML = data.location.name;

            document.querySelector("#temp").innerHTML =
                "<img src='icons/thermometre.png'>" + Math.trunc(data.forecast.forecastday[2].day.avgtemp_c) + "º";

            let sunny = document.querySelector("#clouds")
            if (data.forecast.forecastday[2].day.condition.text === "Partiellement nuageux") {
                sunny.innerHTML = "<img src='./day/116.png'>" + data.forecast.forecastday[2].day.condition.text;
            }
            else if (data.forecast.forecastday[2].day.condition.text === "Ensoleillé") {
                sunny.innerHTML = "<img src='./day/113.png'>" + data.forecast.forecastday[2].day.condition.text;
            }
            else if (data.forecast.forecastday[2].day.condition.text === "Pluie légère") {
                sunny.innerHTML = "<img src='./day/296.png'>" + data.forecast.forecastday[2].day.condition.text;
            }
            else if (data.forecast.forecastday[2].day.condition.text === "Couvert") {
                sunny.innerHTML = "<img src='./day/122.png'>" + data.forecast.forecastday[2].day.condition.text;
            }
            else if (data.current.condition.text === "Pluie forte à modérée avec tonerre par endroit") {
                sunny.innerHTML = "<img src='./day/200.png'>" + data.current.condition.text;
            }
            else if (data.current.condition.text === "Pluie éparse à proximité") {
                sunny.innerHTML = "<img src='./day/176.png'>" + data.current.condition.text;
            }
            else {
                sunny.innerHTML = data.forecast.forecastday[2].condition.text;
            }

            document.querySelector("#wind").innerHTML = "<img src='icons/wind.png'>" +
                data.forecast.forecastday[2].day.maxwind_kph + 'km/h';

            document.querySelector("#nowDate").innerHTML = data.forecast.forecastday[2].date;

        })
        .catch(err => console.log('Erreur : ' + err));

}