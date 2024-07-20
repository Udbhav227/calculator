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
    switch(op) {
        case "+" : return add(a, b);
        case "-" : return subtract(a, b);
        case "x" : return multiply(a, b);
        case "/" : return divide(a, b);
    }
}