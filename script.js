let num1;
let num2; 
let operator;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
} 

function divide (a, b) {
    if (b == 0) {
        alert('Cannot divide by 0, which you definitely knew.');
    } else {
        return a / b;
    }
}

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('#buttonContainer');

buttons.addEventListener('click', (event) => {
    if (!(event.target.getAttribute('id') == 'digitsContainer') && !(event.target.getAttribute('id') == 'operatorsContainer')) {
        display.textContent += event.target.getAttribute('id');
    }

    // When the user hits an operator button, save the current number in a variable, save the operator in a 
    // variable, and set a flag to delete the display the next time a number is entered. 
});