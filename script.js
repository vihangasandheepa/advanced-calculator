let display = document.getElementById('result');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function clearEntry() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    if (!Number.isFinite(result) || isNaN(result)) {
      display.value = 'Error';
    } else {
      display.value = result.toFixed(5);
    }
  } catch (error) {
    display.value = 'Error';
  }
}
