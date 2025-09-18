let num1;
let num2; 
let operator;

const display = document.querySelector('#display');
const digitButtons = document.querySelector('#digitsContainer');
const operatorButtons = document.querySelector('#operatorsContainer');
const clearButton = document.querySelector('#clear');

let operatorFlag = false;
let deleteDisplayFlag = false;

function add (a, b) {
    return Number(a + b);
}

function subtract (a, b) {
    return Number(a - b);
}

function multiply (a, b) {
    return Number(a * b);
} 

function divide (a, b) {
    if (b == 0) {
        alert('Cannot divide by 0, which you definitely knew.');
    } else {
        return Number(a / b);
    }
}

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function clear() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    operatorFlag = false;
    display.textContent = ''; 
}

operatorButtons.addEventListener('click', (event) => {
    if (!(event.target.getAttribute('id') == 'operatorsContainer')) {
        if (operatorFlag) {
            num2 = parseFloat(Number(display.textContent).toFixed(2));
            num1 = operate(num1, num2, operator);
            display.textContent = num1;
            if (event.target.getAttribute('id') != '=') operator = event.target.getAttribute('id');
        } else {
            if (event.target.getAttribute('id') == '=') {
                alert('Equals pressed without two operands');
            } else {
                operatorFlag = true;
                operator = event.target.getAttribute('id');
                num1 = parseFloat(Number(display.textContent).toFixed(2));
            }
        }
        deleteDisplayFlag = true; // Indicates we need to delete the display the next time a number key is pressed   
        // printLog();
    }
});

digitButtons.addEventListener('click', (event) => {
    if (!(event.target.getAttribute('id') == 'digitsContainer')) {
        if (deleteDisplayFlag) { 
            display.textContent = '';
            deleteDisplayFlag = false; 
        }
        display.textContent += event.target.getAttribute('id');
        // printLog();
    }
});

clearButton.addEventListener('click', clear);

function printLog() {
    console.log(`num1: ${num1} and is a ${typeof num1}`);
    console.log(`num2: ${num2} and is a ${typeof num2}`);
    console.log(`operator: ${operator}`);
    console.log('----'); 
}