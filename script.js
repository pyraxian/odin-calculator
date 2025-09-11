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
const btns = document.querySelector('#buttonContainer');

console.log(display);
console.log(btns);

btns.addEventListener('click', (event) => {
display.textContent += event.target.getAttribute('id');
});