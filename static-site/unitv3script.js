'use strict';

const input = document.querySelector('.inputField');
const convertToCBtn = document.querySelector('.convertBtnC');
const convertToFBtn = document.querySelector('.convertBtnF');
const resetBtn = document.querySelector('.resetBtn');
const radioCelsius = document.querySelector('.celsius');
const radioFahrenheit = document.querySelector('.fahrenheit');
const result = document.querySelector('.result');

//c to f
function convertToF() {
    if (isNaN(input.value)) {
        result.innerHTML = 'Value not allowed!';
    } else {
        const fahrenheit = (input.value * 9/5) + 32 ;
        result.innerHTML = `${fahrenheit} ºF`;
    }
}

//f to c
function convertToC() {
    if (isNaN(input.value)) {
        result.innerHTML = 'Value not allowed!';
    }else {
        const celsius = (input.value - 32) * 5/9;
        result.innerHTML = `${celsius} ºC`
    }
}

radioCelsius.addEventListener('click', function () {
    convertToFBtn.classList.remove('hidden');
    convertToCBtn.classList.add('hidden');

})

radioFahrenheit.addEventListener('click', function () {
    convertToCBtn.classList.remove('hidden');
    convertToFBtn.classList.add('hidden');

})

convertToCBtn.addEventListener('click', function () {
    result.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    convertToC();
});

convertToFBtn.addEventListener('click', function () {
    result.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    convertToF();
});

resetBtn.addEventListener('click', function () {
    result.classList.add('hidden');
    resetBtn.classList.add('hidden');
})