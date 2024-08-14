/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-el")
let lengthP = document.getElementById("length-P")
let volumeP = document.getElementById("volume-P")
let massP = document.getElementById("mass-P")

let meter = 3.281
let liter = 0.264
let kilogram = 2.204

let foot = 0.3048
let gallon = 3.78541
let pound = 0.453592

convertEl.addEventListener("click" ,function(){
    let inputValue = inputEl.value
    //console.log(inputValue)
    
   let convertedLength = (inputValue * meter).toFixed(4)
   let converterVolumeP = (inputValue * liter).toFixed(4)
   let convertedMassP = (inputValue * kilogram).toFixed(4)
    //console.log
   let convertedFoot = (inputValue * foot).toFixed(4)
   let converterGallon = (inputValue * gallon).toFixed(4)
   let converteedPound = (inputValue * pound).toFixed(4)
    
    lengthP.innerHTML = `${inputValue} meter = ${convertedLength} feet | ${inputValue} feet  = ${convertedFoot} meters`
    volumeP.innerHTML = `${inputValue} liter = ${converterVolumeP} gallons | ${inputValue} gallons = ${converterGallon} liters`
    massP.innerHTML = `${inputValue} kilos = ${convertedMassP} pounds | ${inputValue} pounds = ${converteedPound} kilos`
})

