
const input= document.getElementById('textbox')
const toFahrenheit= document.getElementById('toFahrenheit')
const toCelsius= document.getElementById('toCelsius')
const toKelvin = document.getElementById('toKelvin')
const result= document.getElementById('result')


function convert(){

    const val = textbox.value.trim()

    if(val === ""){
        result.textContent = "Please enter a number"
        return
    }
    temp = Number(input)

    if(toFahrenheit.checked){
        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32
        result.textContent =  temp.toFixed(1) + " °F"
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value)
        temp = (temp - 32) * (5 / 9)
        result.textContent =  temp.toFixed(1) + " °C"
    }
    else if(toKelvin.checked){
        temp = Number(textbox.value)
        temp = temp + 273.15
        result.textContent = temp.toFixed(1) + " K"
    }
    else{
        result.textContent = "Select a Unit"
    }
}
