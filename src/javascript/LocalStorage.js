import {addElements} from "./createElements.js"
addElements()



export function storageAll() {


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

}