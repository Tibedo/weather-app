import { dayTwoCall } from "./DayTwoCall.js";

export function nextDayButton() {

    let nextDay = document.querySelector(".nextDay")
    
    nextDay.addEventListener('click', function (e) {
        e.preventDefault();
        let citys = document.querySelector('.askCity').value;
    
        dayTwoCall(citys)
    })
    }