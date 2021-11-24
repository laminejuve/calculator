function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply(a,b){
    return a*b ;
}
function divide (a,b){
    return a/b ;
}
function power (a,b){
    return Math.pow(a,b);
}
function operate (operator , a ,b){
    switch (operator) {
        case '+':
          add(a,b);
          break;
        case '-':
          subtract(a,b);
          break;
        case '*':
          multiply(a,b);
          break;
        case '/':
          divide(a,b);
          break;
        case '^':
          power(a,b);
      }

}
let btns = document.querySelectorAll('button');
console.log(btns.length);
 btns.forEach( element => {
     element.addEventListener('click', display);
 });
function display(e) {
   const value = e.target.innerHTML;
   console.log(typeof(value));
   document.getElementById("main").value+=value;
}