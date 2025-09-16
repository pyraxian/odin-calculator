let num1;
let num2; 
let operator;

const display = document.querySelector('#display');
const buttons = document.querySelector('#buttonContainer');

let operatorFlag = false;

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

function clear() {
    num1 = null;
    num2 = null;
    operator = null;
    operatorFlag = false;
    display.textContent = '';
}

buttons.addEventListener('click', (event) => {

    if (!(event.target.getAttribute('id') == 'digitsContainer') && !(event.target.getAttribute('id') == 'operatorsContainer')) {
        if (event.target.parentElement.classList.contains('operators')) { // Button pressed was an operator
            // Save current display in a variable as a number
            // Save operator in a variable
            // Set operator flag to true
        } else {
            display.textContent += event.target.getAttribute('id');
        }  
    }

    // When the user hits an operator button, save the current number in a variable, save the operator in a 
    // variable, and set a flag to delete the display the next time a number is entered. 
});