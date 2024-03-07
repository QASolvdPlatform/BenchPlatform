'use strict';

const convertBtn = document.querySelector('.convertBtn');
const radioBtnCelsius = document.querySelector('.celsius');
const input = document.querySelector('.inputField');
const inputValue = input.value;
const result = document.querySelector('.result');

function isNumber() {
    return isNaN();
}

function printResult() {
    if (inputValue.isNaN) {
        result.innerHTML = 'Value not allowed!';
    } else if (radioBtnCelsius.checked) {
        result.innerHTML = inputValue + ' ºC';
    } else {
        result.innerHTML = (inputValue * 9 / 5) + 32 + ' ºF';
    }
}
convertBtn.addEventListener('click', function () {
    result.classList.remove('hidden');
    printResult();
});