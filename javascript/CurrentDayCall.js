import {APIKEY, UNSKEY, askCity, submit} from "./constantes.js"
import {addElements} from "./createElements.js"
addElements()

// ********* CURRENT DAY CALL ********** //

export function currentDayCall(cityz) {
   
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityz}&days=5&units=metric&lang=fr`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meteoList = data.res;
            console.log(data);
            

            // ***** CITY ***** //       
            city.innerHTML = data.location.name;

            // ***** TEMP ***** //        
            document.querySelector("#temp").innerHTML =
                "<img src='icons/thermometre.png'>" + Math.trunc(data.current.temp_c) + "º";

            // ***** SUN CLOUDS RAIN ***** //
            let sunny = document.querySelector("#clouds")
            if (data.current.condition.text === "Partiellement nuageux") {
                sunny.innerHTML = "<img src='./day/116.png'>" + data.current.condition.text;
            }
            else if (data.current.condition.text === "Ensoleillé") {
                sunny.innerHTML = "<img src='./day/113.png'>" + data.current.condition.text;
            }
            else if (data.current.condition.text === "Pluie légère") {
                sunny.innerHTML = "<img src='./day/296.png'>" + data.current.condition.text;
            }
            else if (data.current.condition.text === "Couvert") {
                sunny.innerHTML = "<img src='./day/122.png'>" + data.current.condition.text;
            }
            else {
                sunny.innerHTML = data.current.condition.text;
            }
            // ***** WIND ***** //
            document.querySelector("#wind").innerHTML = "<img src='icons/wind.png'>" +
                data.current.wind_kph + 'km/h';

            // ***** DATE ***** //      
            document.querySelector("#nowDate").innerHTML = data.current.last_updated;
        })


    // ******* CITY PICTURES ****** //
    let imgUrl = `https://api.unsplash.com/search/photos?query=${cityz}&client_id=${UNSKEY}&lang=fr`;

    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            let body = document.querySelector("#body").style.backgroundImage = "url(" + data.results[Math.floor(Math.random() * 10)].urls.regular + ")"

            console.log(body)
        })
        .catch(err => console.log('Erreur : ' + err));

}
export let selectValue = document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let citys = document.querySelector('.askCity').value;

    currentDayCall(citys);
})
