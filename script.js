const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__output');
let array = [];
let operatorIsPressed = false;

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        let displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === '0' || operatorIsPressed) {
                display.textContent = keyContent;
                operatorIsPressed = false;
              } else {
                display.textContent = displayedNum + keyContent;
              }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }
        
        if (action === 'clear') {
            display.textContent = '0';
            array = [];
            operatorIsPressed = false;
        }
        
        if (action === 'backspace') {
            if (displayedNum !== '0') {
                display.textContent = displayedNum.slice(0, -1) || '0';
            }
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            array[0] = parseFloat(displayedNum);
            array[1] = action;
            operatorIsPressed = true;
        }

        if (action === 'calculate') {
            calculate();
        }

        function calculate() {
            array[2] = parseFloat(displayedNum);
            display.textContent = operate(array[0], array[1], array[2]);
            console.log(array);
            array = [display.textContent];
            operatorIsPressed = false;
        }
    }
});

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

function operate(a, op, b) {
    switch (op) {
        case "add": return add(a, b);
        case "subtract": return subtract(a, b);
        case "multiply": return multiply(a, b);
        case "divide": return divide(a, b);
    }
}