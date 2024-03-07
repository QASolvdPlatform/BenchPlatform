'use strict';

const inputCelsius = document.querySelector('.fromCtoF');
const inputFahrenheit = document.querySelector('.fromFtoC');
const convertToFBtn = document.querySelector('.convertToF');
const convertToCBtn = document.querySelector('.convertToC');
const result = document.querySelector('.result');


//celsius to f
function convertToF() {
    result.classList.remove('hidden');
    if (isNaN(inputCelsius.value)) {
        result.innerHTML = `Value not allowed!`;
    } else {
        const fahrenheit = (inputCelsius.value * 9/5) + 32 ;
        result.innerHTML = `${fahrenheit} ºF`;
    }
}

//f to celsius
function convertToC() {
    result.classList.remove('hidden');
    if (isNaN(inputFahrenheit.value)) {
        result.innerHTML = `Value not allowed!`;
    }else {
        const celsius = (inputFahrenheit.value - 32) * 5/9;
        result.innerHTML = `${celsius} ºC`
    }
}

convertToFBtn.addEventListener('click', function () {
    convertToF();
});

convertToCBtn.addEventListener('click', function () {
    convertToC();
});

