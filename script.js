function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return b === 0 ? "You can't divide by zero, you stupid fuck" : a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            break;
    }
}

const formulaBar = document.querySelector('.formula-bar');
const outputBar = document.querySelector('.output-bar');
const buttons = document.querySelectorAll('.calculator-button');
const OPERATORS = ['x', '+', '-', '÷'];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let firstValue = '';
let operator = '';
let secondValue = '';

buttons.forEach(button => {
    if (button.id === 'ac') {
        button.addEventListener('click', () => {
            clearCalculatorScreen();
            resetCalculationVariables();
        });
    } else if (button.classList.contains('number')) {
        button.addEventListener('click', () => {
            if (operator === '') {
                firstValue += button.textContent.trim();
                addAppendText(button);
            } else {
                secondValue += button.textContent.trim();
                addAppendText(button);
            }
        });
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => {
            if (firstValue && operator){
                clearCalculatorScreen();
                formulaBar.textContent = firstValue;
                addAppendText(button);
                operator = button.textContent.trim();
            }else {
                if (OPERATORS.includes(button.textContent.trim()) && operator === '' && !(firstValue === '')) {
                    operator = button.textContent.trim();
                    addAppendText(button);
                }
            }
        });

    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', () => {
            if (operator && outputBar.textContent.trim() === '') {
                if (secondValue.includes('.')) {
                    return;
                } else {
                    secondValue += button.textContent.trim();
                    addAppendText(button);
                }
            } else {
                if (firstValue.includes('.')) {
                    return;
                } else {
                    firstValue += button.textContent.trim();
                    addAppendText(button);
                }
            }
        });
    } else if (button.classList.contains('operate')) {
        button.addEventListener('click', () => {
            if (operator && firstValue && secondValue) {
                let calculatedValue = operate(operator, parseFloat(firstValue), parseFloat(secondValue));
                outputBar.textContent = calculatedValue;
                firstValue = calculatedValue;
                secondValue = '';
            }
        })
    } else if (button.classList.contains('uwu')) {
        button.addEventListener('click', () => {
            alert('ᕕ༼💸•̀︿•́༽ᕗ');
        })
    }
})

function clearCalculatorScreen() {
    formulaBar.textContent = '';
    outputBar.textContent = '';
}

function resetCalculationVariables() {
    firstValue = '';
    operator = '';
    secondValue = '';
}

function addAppendText(button) {
    formulaBar.textContent += button.textContent.trim();
}

function addDecimal(button) {
    if (!formulaBar.textContent.includes('.')) {
        addAppendText(button);
    } 
}