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
            if (!operatorFlag) { // An operator has not been pressed before 
                if (event.target.getAttribute('id') == '=') {
                    alert('= was pressed without two operands.')
                } else {
                    operatorFlag = true;
                    operator = event.target.getAttribute('id');
                    num1 = Number(display.textContent).toFixed(2);
                }
                 
            } else { // An operator has previously been pressed
                num2 = Number(display.textContent).toFixed(2);
                num1 = operate(num1, num2, operator);
                display.textContent = num1;

            }
        } else { // Button pressed was a number
            display.textContent += event.target.getAttribute('id');
        }
        console.log(`num1: ${num1}`);
        console.log(`num2: ${num2}`);
        console.log(`operator: ${operator}`);
        console.log('----');
    }

    // When the user hits an operator button, save the current number in a variable, save the operator in a 
    // variable, and set a flag to delete the display the next time a number is entered. 
});