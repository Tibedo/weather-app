/* ******** CONSTANTES ******** */

// import {APIKEY, UNSKEY, askCity, submit} from "./constantes.js"

/* ******** CREATE ELEMENTS ******* */



/* ******** CURRENT DAY CALL ********** */

import {currentDayCall} from "./CurrentDayCall.js"
currentDayCall();

/* ******** DAY 3 CALL ********** */

// import {dayThreeCall} from "./DayThreeCall.js"
// dayThreeCall()

/* ********* DAY 2 CALL ********* */

import {dayTwoCall} from "./DayTwoCall.js"
dayTwoCall();

/* ******* NEXT DAY BUTTON ******* */

import {nextDayButton} from "./NextDayButton.js";
nextDayButton();

// ********** COMPARE CITYS ********** //

import { compareCitys } from "./CompareCitys.js";
compareCitys()


// ********* LOCAL STORAGE ********** //

/*
let meteObject = {
    city: data.location.name,
    temp: Math.trunc(data.current.temp_c),
    sunny: data.current.condition.text,
    wind: data.current.wind_kph,
  }

  let localStorage = JSON.parse(localStorage.getItem("weather"))
  console.log(localStorage)

  if (localStorage) {
    localStorage.push(meteObject)
    localStorage.setItem("weather", JSON.stringify(localStorage))
    console.log(localStorage)
  }
  else {
    localStorage = []
    localStorage.push(meteObject)
    localStorage.setItem("weather", JSON.stringify(localStorage))
    console.log(localStorage) 
  }
*/


/*
const citiesJson = localStorage.getItem('cities');
let cities = [];
citiesJson.push(meteObject)
if (citiesJson) {
    cities = JSON.parse(citiesJson);
}

saveIntoStorage() {
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }
*/