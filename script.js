function add(a, b) {
  return (+a) + (+b);
}
function subtract(a, b) {
  return (+a) - (+b);
}
function multiply(a, b) {
  return (+a) * (+b);
}
function divide(a, b) {
  return (+a) / (+b);
}
function power(a, b) {
  return Math.pow(+a, +b);
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case 'x':
      return multiply(a, b);
      break;
    case '÷':
      return divide(a, b);
      break;
    case 'pow':
      return power(a, b);
  }
}

let operator = "";
let num1 = "";
let num2 = "";
let numOperator = 0;

let numbers = document.querySelectorAll('.number');
numbers.forEach(numb => {
  numb.addEventListener('click', display);
});
let operations = document.querySelectorAll('.operation');
operations.forEach(opr => {
  opr.addEventListener('click', selectOpr);
});
let btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', getResult);

function display(e) {
  if (operator === "") {
    const value = e.target.innerHTML;
    document.getElementById("main").value += value;
    num1 = document.getElementById("main").value;
  } else {
    const value = e.target.innerHTML;
    document.getElementById("main").value += value;
    num2 = document.getElementById("main").value;
  }
}
function selectOpr(e) {
  if (num2 !== "") {
    let result = operate(num1, operator, num2);
    document.getElementById("sec").value = result;
    document.getElementById("main").value = "";
    console.log(operator);
    num1 = result;
    num2 = "";
    operator = e.target.innerHTML;
  }else {
    operator = e.target.innerHTML;
    let sec = document.getElementById("main").value += operator;
    document.getElementById("main").value = "";
    document.getElementById("sec").value = sec;
  }
}
function getResult() {
  let result = operate(num1, operator, num2);
  let sec = document.getElementById("main").value;
  document.getElementById("sec").value += sec;
  document.getElementById("main").value = result;
  console.log(operator);
  num1 = result;
  num2 = "";
  operator = "";
}
