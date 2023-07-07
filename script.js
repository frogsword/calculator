let allButtons = document.getElementsByTagName('button');
const display = document.querySelector('.display');
let num1;
let num2;
let answer;
let temp;

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

//percent
          if (e.target.getAttribute('class') === 'percent') {
               temp = parseFloat(display.textContent)/100;
               if (temp.toString().length < 10) {
                    display.textContent = temp.toString();
               }
          }

//adds decimal
          if (e.target.getAttribute('class') === 'decimal' && !(display.textContent.includes("."))) {
               display.textContent += e.target.textContent;
          }

//clears display
          if (e.target.getAttribute('class') === 'clear') {
               display.textContent = '0';
               num1 = null;
               num2 = null;
               answer = null;
          }

//switches sign
          if (e.target.getAttribute('class') === 'sign') {
               display.textContent *= -1;
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
}
