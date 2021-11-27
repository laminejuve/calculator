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
let result = "";

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

let btnPoint = document.querySelector('#btnPoint');
btnPoint.addEventListener('click', addPoint);

let btnClear = document.querySelector('#btnClr');
btnClear.addEventListener('click',clear);

let btnDel = document.querySelector('#btnDel');
btnDel.addEventListener('click',delet);

let btnPercent = document.querySelector('#btnPercent');
btnPercent.addEventListener('click',percent);

function percent(e){
  let currentVal = document.getElementById("main").value;
  if (currentVal!==""){
    result = +currentVal/100;
    document.getElementById("main").value = result;
  } else {
    document.getElementById("main").value = "Enter a number first";
    result = "Error";
  }
}

function delet(e){
 let currentVal = document.getElementById("main").value;
 document.getElementById("main").value = currentVal.slice(0, -1);
 }

function clear(e){
 operator = "";
 num1 = "";
 num2 = "";
 numOperator = 0;
 result = "";
 document.getElementById("main").value = "";
 document.getElementById("sec").value = "";
}

function addPoint (e){
  const value = e.target.innerHTML;
  let currentVal = document.getElementById("main").value;
  if (!currentVal.includes(".")){
    document.getElementById("main").value += value;
  } 
}

function display(e) {
  if (result !== ""){
    document.getElementById("main").value = "";
    result = "";
  }
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
    result = operate(num1, operator, num2);
    let roundedResult = Number(Math.round(result+'e2')+'e-2');
    document.getElementById("sec").value = roundedResult;
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
  if (num1!=="" && operator!=="" && num2!==""){
    result = operate(num1, operator, num2);
    let sec = document.getElementById("main").value;
    document.getElementById("sec").value += sec;
    let roundedResult = Number(Math.round(result+'e2')+'e-2');
    document.getElementById("main").value = roundedResult;
    console.log(operator);
    num1 = result;
    num2 = "";
    operator = "";
  } else {
    document.getElementById("main").value = "not a valid operation";
    result = "Error";
  } 
}
