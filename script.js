const numpad = document.querySelector('.numPad');
const numbers = numpad.children;
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');
const operatorBox = document.querySelector('.functions');
const operators = operatorBox.children;
const equals = document.getElementById('equals');
let inputNum = '';
let firstNumber = 0;
let secondNumber = 0;
let operator;
let repeat = true;

function operate(operator, a, b) {
	if (operator === 'add') {
		return a + b;
	} else if (operator === 'subtract') {
		return a - b;
	}
	else if (operator === 'multiply') {
		return a * b;
	}
	else if (operator === 'divide') {
		if (b === 0) return 'Nope';
		return a / b;
	}
	else if (a === '' || b === '') {
		return "error";
	}
	else {
		return "error";
	}
}

function writeNumber(e) {
	inputNum = inputNum + this.textContent;
	display.textContent = `${inputNum}`
	e.stopPropagation();
	}

function clearScreen() {
	inputNum = '';
	display.textContent = `${inputNum}`;
	}

function prepare(e) {
	firstNumber = parseInt(inputNum); 
	operator = `${this.id}`
	console.log(operator);
	inputNum = '';
	repeat = false;
}

function equal() {
	if (!repeat) secondNumber = parseInt(inputNum);
	inputNum = `${operate(operator, firstNumber, secondNumber)}`;
	display.textContent = `${inputNum}`;
	firstNumber = parseInt(inputNum);
	repeat = true;
}
clearButton.addEventListener('click', clearScreen, {
	capture: false
});

equals.addEventListener('click', equal, {
	capture: false
});

for (number of numbers) {
	number.addEventListener('click', writeNumber, {
	capture: false
}
)};

for (operatorButton of operators) {
	operatorButton.addEventListener('click', prepare, {
	capture: false
}
)};