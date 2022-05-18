// ******** CREATE ELEMENTS ******** //

export function addElements() {

const temp = document.createElement("div")
const city = document.createElement("div")
const clouds = document.createElement("div")
const wind = document.createElement("div")
const dateOfDay = document.createElement("div")

const dataMeteo = document.querySelector(".dataMeteo")
const dates = document.querySelector(".dates")

city.id = "city"
city.className = "box"

temp.id = "temp"
temp.className = "box"

clouds.id = "clouds"
clouds.className = "box"

wind.id = "wind"
wind.className = "box"

dateOfDay.id = "nowDate"

dataMeteo.appendChild(city)
dataMeteo.appendChild(temp)
dataMeteo.appendChild(clouds)
dataMeteo.appendChild(wind)
dates.appendChild(dateOfDay)
}