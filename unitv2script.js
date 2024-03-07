'use strict';

const convertF = document.querySelector('.convertF');
const convertC = document.querySelector('.convertC');
const result = document.querySelector('.result');
const inputC = document.getElementById('fromCtoF');
const inputF = document.getElementById('fromFtoC');


function isNumber() {
    return isNaN();
}

function printResult(unit) {
    result.classList.remove('hidden');
    if (unit === "C") {
        if (inputC.value.isNaN) {
            result.innerHTML = 'Value not allowed!';
        } else {
            const fahrenheit = (inputC.value * 9 / 5) + 32;
            result.innerHTML = `${fahrenheit} ºF`
        }
    } else {
        if (inputF.value.isNaN) {
            result.innerHTML = 'Value not allowed!';
        } else {
            const celsius = (inputF.value - 32) * 5 / 9;
            result.innerHTML = `${celsius} ºC`;
        }
    }
}
convertC.addEventListener('click', function () {
    printResult("C");
});

convertF.addEventListener('click', function () {
    printResult("F");
});

