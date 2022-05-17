// ***** CONSTANTES ****** //

const APIKEY = "3a77b5b835af4f1fa7c141218221605";

const UNSKEY = "nSvRS_iz4NQOOHHytg1OvgqvZZQYJArqtrZxklHOnkg"

const askCity = document.querySelector(".askCity")
const submit = document.querySelector(".submit")

const dataMeteo = document.querySelector(".dataMeteo")
const dates = document.querySelector(".dates")



// ******** CREATE ELEMENTS ******* //

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

const dateOfDay = document.createElement("div")
dateOfDay.id ="nowDate"

dataMeteo.appendChild(city)
dataMeteo.appendChild(temp)
dataMeteo.appendChild(clouds)
dataMeteo.appendChild(wind)
dates.appendChild(dateOfDay)




// ******** CURRENT DAY CALL ********** //

let apiCall = function (cityz) {

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
        "<img src='thermometre.png'>" + Math.trunc(data.current.temp_c) + "º";

// ***** SUN CLOUDS RAIN ***** //
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
// ***** WIND ***** //
        document.querySelector("#wind").innerHTML = "<img src='wind.png'>" +
          data.current.wind_kph + 'km/h'; 

// ***** DATE ***** //      
        document.querySelector("#nowDate").innerHTML = data.current.last_updated;        
    })



     let  imgUrl = `https://api.unsplash.com/photos/random`; 
    
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);
})

    .catch(err => console.log('Erreur : ' + err));

}

document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let citys = document.querySelector('.askCity').value;

    apiCall(citys)
})
apiCall()



// ******** DAY 3 CALL ********** //

function dayThreeCall(cityz) {

    let url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityz}&days=5&units=metric&lang=fr`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        //const meteoList = data.res;
        console.log(data);
       
        city.innerHTML = data.location.name;

        document.querySelector("#temp").innerHTML = 
        "<img src='thermometre.png'>" + Math.trunc(data.forecast.forecastday[2].day.avgtemp_c) + "º";

       let sunny = document.querySelector("#clouds")
       if (data.forecast.forecastday[2].day.condition.text === "Partiellement nuageux") {
       sunny.innerHTML = "<img src='./day/116.png'>" + data.forecast.forecastday[2].day.condition.text ;
        }
       else if (data.forecast.forecastday[2].day.condition.text === "Ensoleillé") {
       sunny.innerHTML = "<img src='./day/113.png'>" + data.forecast.forecastday[2].day.condition.text ;
        }
       else if (data.forecast.forecastday[2].day.condition.text === "Pluie légère") {
       sunny.innerHTML = "<img src='./day/296.png'>" + data.forecast.forecastday[2].day.condition.text ;
        }
       else if (data.forecast.forecastday[2].day.condition.text === "Couvert") {
       sunny.innerHTML = "<img src='./day/122.png'>" + data.forecast.forecastday[2].day.condition.text ;
        }
       else  {
       sunny.innerHTML = data.forecast.forecastday[2].condition.text ;
        }

         document.querySelector("#wind").innerHTML = "<img src='wind.png'>" +
          data.forecast.forecastday[2].day.maxwind_kph + 'km/h'; 

         document.querySelector("#nowDate").innerHTML = data.forecast.forecastday[2].date;
         
    })
    .catch(err => console.log('Erreur : ' + err));

}



// ********* DAY 2 CALL ********* //

function dayTwoCall(cityz) {

    let url = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityz}&days=5&units=metric&lang=fr`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        //const meteoList = data.res;
        console.log(data);
       
        city.innerHTML = data.location.name;

        document.querySelector("#temp").innerHTML = 
        "<img src='thermometre.png'>" + Math.trunc(data.forecast.forecastday[1].day.avgtemp_c) + "º";

       let sunny = document.querySelector("#clouds")
       if (data.forecast.forecastday[1].day.condition.text === "Partiellement nuageux") {
       sunny.innerHTML = "<img src='./day/116.png'>" + data.forecast.forecastday[1].day.condition.text ;
        }
       else if (data.forecast.forecastday[1].day.condition.text === "Ensoleillé") {
       sunny.innerHTML = "<img src='./day/113.png'>" + data.forecast.forecastday[1].day.condition.text ;
        }
       else if (data.forecast.forecastday[1].day.condition.text === "Pluie légère") {
       sunny.innerHTML = "<img src='./day/296.png'>" + data.forecast.forecastday[1].day.condition.text ;
        }
       else if (data.forecast.forecastday[1].day.condition.text === "Couvert") {
       sunny.innerHTML = "<img src='./day/122.png'>" + data.forecast.forecastday[1].day.condition.text ;
        }
       else  {
       sunny.innerHTML = data.forecast.forecastday[1].condition.text ;
        }

         document.querySelector("#wind").innerHTML = "<img src='wind.png'>" +
          data.forecast.forecastday[1].day.maxwind_kph + 'km/h'; 

         document.querySelector("#nowDate").innerHTML = data.forecast.forecastday[1].date;

    // ****** DAY THREE CALL ***** //     
         nextDay.addEventListener('click', function (e) {
            e.preventDefault();
            let citys = document.querySelector('.askCity').value;
        
            dayThreeCall(citys)

    })
    .catch(err => console.log('Erreur : ' + err));  
 })

}



// ******* NEXT DAY BUTTON ******* //

let nextDay = document.querySelector(".nextDay")

nextDay.addEventListener('click', function (e) {
    e.preventDefault();
    let citys = document.querySelector('.askCity').value;

    dayTwoCall(citys)   
})



// ********** COMPARE CITYS ********** //
let cityOneInput = document.createElement("input") 
let cityTwoInput = document.createElement("input") 
let compareButton = document.createElement("button")

cityOneInput.className = "cityInput"
cityOneInput.placeholder = "Compare first city"
cityOneInput.id = "cityOneInput"

cityTwoInput.className = "cityInput"
cityTwoInput.placeholder = "Compare second city"
cityTwoInput.id = "cityTwoInput"

compareButton.id = "compareButton"
compareButton.innerHTML = "Compare"

dates.appendChild(cityOneInput)
dates.appendChild(cityTwoInput)
dates.appendChild(compareButton)


 function compared() {

if (cityOneInput.value > cityTwoInput.value) {
    alert(cityOneInput.value + " " + "is hotter than" + " " + cityTwoInput.value)
}

else {
    alert(cityOneInput.value + " " + "is colder than" + " " + cityTwoInput.value)
}

}

compareButton.addEventListener("click", compared)
 


