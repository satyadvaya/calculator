// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { add, subtract, multiply, divide } from './calculations.js';

function initOperator(input1Id, input2Id, buttonId, resultId, calculation) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultId);

    button.addEventListener('click', () => {
        const result = calculation(Number(input1.value), Number(input2.value));
        display.textContent = result;
    });
}

initOperator('first-add-input', 'second-add-input', 'add-button', 'sum-display', add);
initOperator('first-subtract-input', 'second-subtract-input', 'subtract-button', 'difference-display', subtract);
initOperator('first-multiply-input', 'second-multiply-input', 'multiply-button', 'product-display', multiply);
initOperator('first-divide-input', 'second-divide-input', 'divide-button', 'quotient-display', divide);