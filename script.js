/*let input= document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string =eval(string);
            input.value =string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value =string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string =string.substring(0,string.length-1);
            input.value =string;
        }
        else{
            string += e.target.innerHTML;
            input.value =string;

        }
    })
})*/


let input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
let isOperationPerformed = false;
let isAnswerDisplayed = false;

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = validateInput(string);
        if (string) {
          string = eval(string);
          input.value = string;
          isOperationPerformed = true;
          isAnswerDisplayed = true;
        } else {
          input.value = 'Error';
        }
      } catch (error) {
        input.value = 'Error';
      }
    } else if (e.target.innerHTML === 'AC') {
      string = '';
      input.value = string;
      isOperationPerformed = false;
      isAnswerDisplayed = false;
    } else if (e.target.innerHTML === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      if (isAnswerDisplayed || input.value === 'Error') {
        if (!isNaN(parseFloat(e.target.innerHTML))) {
          string = '';
          input.value = '';
        } else {
          string = input.value;
        }
        isAnswerDisplayed = false;
      }
      string += e.target.innerHTML;
      input.value = string;
      isOperationPerformed = false;
    }
  });
});

function validateInput(inputString) {
  const operators = ['+', '-', '*', '/', '%'];
  const lastChar = inputString.charAt(inputString.length - 1);

  if (operators.includes(lastChar)) {
    return inputString.slice(0, -1);
  }

  return inputString;
}
