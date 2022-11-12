/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-el")
const resetEl = document.getElementById("reset-el")
const inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")



convertEl.addEventListener("click", function(){
    
    
    getConversions()
    
    
})

function getConversions(){
    let forLength = ""
    let inputValue = inputEl.value
    let feet = inputValue * 3.281
    let meter = inputValue / 3.281
    
        forLength  = `
            <h3>
${inputEl.value} meters = ${feet.toFixed(3)} feet  |  ${inputEl.value} feet = ${meter.toFixed(3)} meters
            </h3>
        `
        
    let forVolume = ""
    
    let gallons = inputValue * 0.264
    let liters = inputValue / 0.264
    
         forVolume  = `
            <h3>
${inputEl.value} liters = ${gallons.toFixed(3)} gallons  |  ${inputEl.value} gallons = ${liters.toFixed(3)} liters
            </h3>
        `
        
    let forMass = ""
    
    let pounds = inputValue * 2.204
    let kilos = inputValue / 2.204
    
        forMass  = `
            <h3>
${inputValue} kilos = ${pounds.toFixed(3)} pounds  |  ${inputValue} pounds = ${kilos.toFixed(3)} kilos
            </h3>
        `
    
    lengthEl.innerHTML = forLength
    volumeEl.innerHTML = forVolume
    massEl.innerHTML = forMass
}


resetEl.addEventListener("click", function(){
    inputEl.value = ""
    clearResults()
})
    



function clearResults(){
    lengthEl.innerHTML = ""
    volumeEl.innerHTML = ""
    massEl.innerHTML = ""
}

