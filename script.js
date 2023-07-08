const allButtons = document.getElementsByTagName('button');
const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const signButton = document.querySelector('.sign');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const currentDisplay = document.querySelector('.currentOperand');
const previousDisplay = document.querySelector('.previousOperand');

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let answer = '';
let toResetScreen = false;

decimalButton.addEventListener('click', appendDecimal);
signButton.addEventListener('click', changeSign);
equalButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', allClear);
numberButtons.forEach((button) => 
     button.addEventListener('click', () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) => 
     button.addEventListener('click', () => setOperation(button.textContent))
);

//add number to display
function appendNumber(number) {
     if (currentDisplay.textContent === '0' || toResetScreen) {
          resetScreen();
     }
     if (currentDisplay.textContent.length < 9) {
          currentDisplay.textContent += number;
     }
}

//add decimal to display
function appendDecimal() {
     if (toResetScreen) resetScreen();
     if (!currentDisplay.textContent.includes('.')) {
          currentDisplay.textContent += '.';
     }
}

//change sign on display
function changeSign() {
     if (toResetScreen) resetScreen();
     if (currentDisplay.textContent === '0') {
          currentDisplay.textContent = '';
     }
     if (!currentDisplay.textContent.includes('-')) {
          currentDisplay.textContent = '-' + currentDisplay.textContent;
     } else {
          if (currentDisplay.textContent === '-') {
               currentDisplay.textContent = '0';
          } else {
               currentDisplay.textContent = currentDisplay.textContent.substring(1, currentDisplay.textContent.length);
          }
     }
}

//reset main display
function resetScreen() {
     currentDisplay.textContent = '';
     toResetScreen = false;
}

//set operator 
function setOperation(operator) {
     if (currentOperator != '') evaluate();

     currentOperator = operator;
     firstNumber = Number(currentDisplay.textContent);
     previousDisplay.textContent = `${currentDisplay.textContent} ${currentOperator}`;
     currentDisplay.textContent = ''
     // toResetScreen = true;
}

//evaluate function
function evaluate() {
     if (currentOperator === '' || toResetScreen) return;

     secondNumber = Number(currentDisplay.textContent);

     switch (currentOperator) {
          case ('+'):
               answer = add(firstNumber, secondNumber);
               break;
          case ('-'):
               answer = sub(firstNumber, secondNumber);
               break;
          case ('*'):
               answer = mul(firstNumber, secondNumber);
               break;
          case ('/'):
               if (secondNumber === 0) {
                    allClear();
                    alert("divide by zero error, clearing calculator.")
               } else {
                    answer = div(firstNumber, secondNumber);
               }
               break;
     }

     currentDisplay.textContent = roundAnswer(answer);
     previousDisplay.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`
     currentOperator = '';
     answer = '';
}

function roundAnswer(num) {
     return (Math.round(num * 1000) / 1000)
}

function add(a, b) {
     return a + b;
}
function sub(a, b) {
     return a - b;
}
function mul(a, b) {
     return a * b;
}
function div(a, b) {
     return a / b;
}

//clear calculator
function allClear() {
     firstNumber = '';
     secondNumber = '';
     currentOperator = '';
     currentDisplay.textContent = '0';
     previousDisplay.textContent = '0';
}

// lightens button color
for (i = 0; i < allButtons.length; i++) {
     allButtons[i].addEventListener('mousedown', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 90%)`;
     });
     allButtons[i].addEventListener('mouseup', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 50%)`;
     });
     allButtons[i].addEventListener('mouseout', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 50%)`;
     });
};
