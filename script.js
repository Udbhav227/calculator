const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__output');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if (action === 'decimal') {
            if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            } else if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }


        if (action === 'clear') {
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            display.textContent = '0';
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action === 'backspace') {
            if (displayedNum !== '0') {
                display.textContent = displayedNum.slice(0, -1) || '0';
            }
            calculator.dataset.previousKeyType = 'backspace';

            // Update firstValue if we're not in the middle of an operation
            if (previousKeyType !== 'operator') {
                calculator.dataset.firstValue = display.textContent;
            }
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            ) {
                const calcValue = operate(firstValue, operator, secondValue)
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                }
                display.textContent = operate(parseFloat(firstValue), operator, parseFloat(secondValue));

            }

            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
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

// Dark mode toggle
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})