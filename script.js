let num1;
let num2; 
let operator;

const display = document.querySelector('#display');
const digitButtons = document.querySelector('#digitsContainer');
const operatorButtons = document.querySelector('#operatorsContainer');
const utilityButton = document.querySelector('#utilityContainer');

let operatorFlag = false;
let deleteDisplayFlag = false;
let decimalFlag = false;

function add (a, b) {
    return parseFloat(a + b).toFixed(2);
}

function subtract (a, b) {
    return parseFloat(a - b).toFixed(2);
}

function multiply (a, b) {
    return parseFloat(a * b).toFixed(2);
} 

function divide (a, b) {
    if (b == 0) {
        alert('Cannot divide by 0, which you definitely knew.');
    } else {
        return parseFloat(a / b).toFixed(2);
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
    decimalFlag = false;
    display.textContent = ''; 
}

function backspace() {
    let displayLength = display.textContent.length;
    let lastKey = display.textContent[displayLength - 1];
    display.textContent = display.textContent.slice(0, displayLength - 1);
    if (lastKey == '.') decimalFlag = false;
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
                operatorFlag = true; // Indicates an operator has been pressed, and the next operator press should evaluate the current number pair
                operator = event.target.getAttribute('id');
                num1 = parseFloat(Number(display.textContent).toFixed(2));
            }
        }
        deleteDisplayFlag = true; // Indicates we need to delete the display the next time a number key is pressed   
    }
});

digitButtons.addEventListener('click', (event) => {
    if (!(event.target.getAttribute('id') == 'digitsContainer')) {
        if (deleteDisplayFlag) { 
            display.textContent = '';
            deleteDisplayFlag = false; 
            decimalFlag = false;
        }
        if (event.target.getAttribute('id') == '.') {
            if (!decimalFlag) { 
                decimalFlag = true;
                display.textContent += event.target.getAttribute('id');
            }
        } else {
            display.textContent += event.target.getAttribute('id');
        }
    }
});

utilityButton.addEventListener('click', (event) => {
    if (event.target.getAttribute('id') == 'clear') {
        clear();
    } else if (event.target.getAttribute('id') == 'backspace') {
        backspace();
    }
});
