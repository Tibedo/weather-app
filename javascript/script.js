/* ******** CONSTANTES ******** */

// import {APIKEY, UNSKEY, askCity, submit} from "./constantes.js"

/* ******** CREATE ELEMENTS ******* */

// import {addElements} from "./createElements.js"
// addElements()

/* ******** CURRENT DAY CALL ********** */

import {currentDayCall, selectValue} from "./CurrentDayCall.js"
currentDayCall()

/* ******** DAY 3 CALL ********** */

// import {dayThreeCall} from "./DayThreeCall.js"
// dayThreeCall()

/* ********* DAY 2 CALL ********* */

import {dayTwoCall} from "./DayTwoCall.js"
dayTwoCall()


/* ******* NEXT DAY BUTTON ******* */

import {nextDayButton} from "./NextDayButton.js"
nextDayButton()



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



