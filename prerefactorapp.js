// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { add, subtract, multiply, divide } from './calculations.js';

const firstAddInput = document.getElementById('first-add-input');
const secondAddInput = document.getElementById('second-add-input');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');

addButton.addEventListener('click', () => {
    sumDisplay.textContent = add(Number(firstAddInput.value), Number(secondAddInput.value));

    // const x = Number(firstAddInput.value);
    // const y = Number(secondAddInput.value);
    // const sum = add(x, y);
    // sumDisplay.value = sum;

    // const addTotal = Number(firstAddInput.value) + Number(secondAddInput.value);
    // sumDisplay.textContent = addTotal;
});

const firstSubtractInput = document.getElementById('first-subtract-input');
const secondSubtractInput = document.getElementById('second-subtract-input');
const subtractButton = document.getElementById('subtract-button');
const differenceDisplay = document.getElementById('difference-display');

subtractButton.addEventListener('click', () => {
    differenceDisplay.textContent = subtract(Number(firstSubtractInput.value), Number(secondSubtractInput.value));

    // const subtractTotal = Number(firstSubtractInput.value) - Number(secondSubtractInput.value);
    // differenceDisplay.textContent = subtractTotal;
});

const firstMultiplyInput = document.getElementById('first-multiply-input');
const secondMultiplyInput = document.getElementById('second-multiply-input');
const multiplyButton = document.getElementById('multiply-button');
const productDisplay = document.getElementById('product-display');

multiplyButton.addEventListener('click', () => {
    productDisplay.textContent = multiply(Number(firstMultiplyInput.value), Number(secondMultiplyInput.value));

    // const multiplyTotal = Number(firstMultiplyInput.value) * Number(secondMultiplyInput.value);
    // productDisplay.textContent = multiplyTotal;
});

const firstDivideInput = document.getElementById('first-divide-input');
const secondDivideInput = document.getElementById('second-divide-input');
const divideButton = document.getElementById('divide-button');
const quotientDisplay = document.getElementById('quotient-display');

divideButton.addEventListener('click', () => {
    quotientDisplay.textContent = divide(Number(firstDivideInput.value), Number(secondDivideInput.value));

    // const divideTotal = Number(firstDivideInput.value) / Number(secondDivideInput.value);
    // quotientDisplay.textContent = divideTotal;
});