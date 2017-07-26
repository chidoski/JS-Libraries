function isEven(num){
    var value = num % 2 == 0;
    return value;
}

//This value will return "true" meaning that 6 is even
/*var submit_number = 6;
isEven(submit_number);
console.log(isEven(submit_number));*/

//This value will return "false" meaning that 7 is odd
/*var submit_number = 7;
isEven(submit_number);
console.log(isEven(submit_number));*/

//I know want to iterate through the function with even numbers
//let's see if this will work
for(var i = 0; i <= 10; i ++)
{
  console.log(isEven(i));
}
/*After a value is returned the program will stop but I believe that since this
was a function inside of a loop, the loop had to finsh interating.
*/
//in order to find all ODD numbers simply negate the isEven funtion
