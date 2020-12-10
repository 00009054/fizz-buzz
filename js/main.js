// var userMoneyInUzs = prompt(`Enter th evalue:`);

// if (userMoneyInUzs >= 6000) {
// console.log(`Rich man`);
// } else if (userMoneyInUzs < 0) {
// console.log(`Need to work`)
// } else{
// console.log(`Enough`)
// }

// var userAge = Number(prompt(`Enter your age`));

// if (userAge >= 0 && userAge<= 3) {
// console.log(`Baby`);
// } else if (userAge >= 4 && userAge <= 12) {
// console.log(`Boy | Girl`)
// } else if (userAge >= 13 && userAge <= 19) {
// console.log(`Teenager`)
// }else if (userAge >= 20){
// console.log(`Adult`)
// }else {
// console.log(`Not defined`)
// }
var elResult = document.querySelector('.result');
var elMathForm = document.querySelector('.math-form');
var elValueInput = elMathForm.querySelector('.value-input');

elMathForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  var number = parseFloat(elValueInput.value.trim(), 10);
  
  
  if (number%3 === 0 && number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `FizzBuzz`;
  } 
  else if (number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Fizz`;
  }
  else if (number%3 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Buzz`;
  }
  else {
    elResult.classList.remove('d-none');
    elResult.textContent = `${number}`;
  };
  
  
});
