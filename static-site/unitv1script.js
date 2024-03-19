'use strict';

const convertBtn = document.querySelector('.convertBtn');

const result = document.querySelector('.current-result');

//convert functionality
convertBtn.addEventListener('click', function() {
    //1. convert value
    const value = document.getElementById('input').value
    const fahrenheit = (value * 9/5) + 32;
    console.log(fahrenheit);

    //2. display result
    function displayResult() {
        result.classList.remove('hidden');
        document.querySelector('.current-result').innerHTML = `${fahrenheit}`;
    }

    displayResult();
});