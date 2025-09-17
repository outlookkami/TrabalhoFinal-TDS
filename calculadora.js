let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function appendNumber(num) {
  if (display.innerText === '0' || resetNext) {
    display.innerText = num;
    resetNext = false;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  if (!resetNext) {
    display.innerText += op;
    resetNext = false;
  }
}

function clearDisplay() {
  display.innerText = '0';
  currentInput = '';
}

function toggleSign() {
  let value = eval(display.innerText);
  value = value * -1;
  display.innerText = value;
  resetNext = true;
}

function calculateResult() {
  try {
    let result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = result;
    resetNext = true;
  } catch {
    display.innerText = 'Erro';
  }
}
