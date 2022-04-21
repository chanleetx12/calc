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
            add(a, b)
            break;
        case '-':
            subtract(a, b);
            break;
        case 'x':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            break;

    }
}

const formulaBar = document.querySelector('.formula-bar');
const buttons = document.querySelectorAll('.calculator-button');

buttons.forEach(button => {
    if (button.id === 'ac') {
        button.addEventListener('click', clearFormulaBar)
    } else if (button.classList.contains('number') || button.classList.contains('operator')) {
        addAppendText(button)
    }
})

function clearFormulaBar() {
    formulaBar.textContent = '';
}

function addAppendText(button) {
    button.addEventListener('click', () => {
        formulaBar.textContent += button.textContent.trim();
    })
}