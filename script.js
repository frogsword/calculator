let allButtons = document.getElementsByTagName('button');
let operandButtons = document.querySelectorAll('.operand');
let operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const decimalButton = document.querySelector('.decimal');
const percentButton = document.querySelector('.percent');
const signButton = document.querySelector('.sign');
const clearButton = document.querySelector('.clear');
const display = document.querySelector('.display');
let num1;
let num2;
let answer;

for (i = 0; i < allButtons.length; i++) {

     allButtons[i].addEventListener('click', function(e) {

//adds clicked operand to display panel
          if (e.target.getAttribute('class') === 'operand' && display.textContent.length < 9) {
               if (display.textContent === '0') {
                    display.textContent = '';
                    display.textContent += e.target.textContent;
               } else {
                    display.textContent += e.target.textContent;
               }
          }

//clears display
          if (e.target.getAttribute('class') === 'clear') {
               display.textContent = '0';
               num1 = null;
               num2 = null;
               answer = null;
          }
     })

     //lightens button color when clicked
     allButtons[i].addEventListener('mousedown', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 90%)`;
     })
     allButtons[i].addEventListener('mouseup', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 50%)`;
     })
     allButtons[i].addEventListener('mouseout', function(e) {
          e.target.style.backgroundColor = `hsl(${e.target.getAttribute('color')}, 100%, 50%)`;
     })
     //
}
