let displayValue = '0';
let operator = '';
let operand1 = null;
let operand2 = null;
let result = null;

function addNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function addOperator(op) {
  operator = op;
  operand1 = parseFloat(displayValue);
  displayValue = '0';
}

function calculate() {
  operand2 = parseFloat(displayValue);
  switch(operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = null;
  }
  displayValue = result.toString();
  operator = '';
  operand1 = null;
  operand2 = null;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  operand1 = null;
  operand2 = null;
  result = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').textContent = displayValue;
}