const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === "" && operator !== '-') return;
    display.value += operator;
}

function appendDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function appendDoubleZero() {
    if (display.value !== "") {
        display.value += '00';
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        
        if (result === Infinity || isNaN(result)) {
            display.value = "Error"; 
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = "Error";
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') appendNumber(key);
    if (['+', '-', '*', '/', '%'].includes(key)) appendOperator(key);
    if (key === '.') appendDecimal();
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    if (key === 'Backspace') deleteLast();
    if (key === 'Escape') clearDisplay();
});