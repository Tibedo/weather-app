// ********* COMPARE CITYS ********* //

export function compareCitys() {

const dates = document.querySelector(".dates")
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
compareButton.addEventListener("click", compared);

}