// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const firstAddInput = document.getElementById('first-add-input');
const secondAddInput = document.getElementById('second-add-input');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum-display');

addButton.addEventListener('click', () => {

    const addTotal = Number(firstAddInput.value) + Number(secondAddInput.value);
    sumDisplay.textContent = addTotal.value;

});