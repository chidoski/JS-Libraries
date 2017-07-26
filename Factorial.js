/*Functions Exercise

1. Factorial is the product of an integer and all the integers below. for ex 6! = 6 * 5 * 4 * 3 * 2 * 1.
Answer should be: 720

2. isEven() - is the number even or odd?

3. kebabtoSnake() - takes a single string kebab case argument and turns it into a snake case
ex: hello-world vs hello_world */

//What is the factorial of 6?
function factorial(number){
  var num1 = 1
  for(var i = 1; i < number + 1; i++){
    num1 *= i;
  //  x *= y : same as x = x * y
  }
  return(num1);
}

var entered_number = 6;
var answer = factorial(entered_number);

console.log(answer);
