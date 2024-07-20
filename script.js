const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;

        if (!action) {
            console.log('number key')
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
        }

        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }

        if (action === 'backspace') {
            console.log('backspace key!')
        }
    }
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0) return a / b;
    else return "ERROR";
}

function operate(a, b, op) {
    switch (op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "x": return multiply(a, b);
        case "/": return divide(a, b);
    }
}