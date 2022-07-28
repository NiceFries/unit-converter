/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")
const conLen = document.querySelector("#con-len")
const conVol = document.querySelector("#con-vol")
const conMass = document.querySelector("#con-mass")

convertBtn.addEventListener("click", function() {
    const num = inputEl.value
    const metersToFeet = num * 3.281
    const feetToMeters = num / 3.281
    conLen.textContent = `${num} meters = ${metersToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeters.toFixed(3)} meters`
    const literToGallon = num * 0.264
    const gallonToLiter = num / 0.264
    conVol.textContent = `${num} liters = ${literToGallon.toFixed(3)} gallons | ${num} gallons = ${gallonToLiter.toFixed(3)} liters`
    const kiloToPound = num * 2.204 
    const poundToKilo = num / 2.204
    conMass.textContent = `${num} kilograms = ${kiloToPound.toFixed(3)} pounds | ${num} pounds = ${poundToKilo.toFixed(3)} kilograms`
})
