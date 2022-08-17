//Display::
//first= 21;
//secound=18;


//Way-1::
let first = 18;
let secound = 21;
let temp = first;
first = secound;
secound = temp;
console.log(first, secound);

//Way-2::
let num1 = 18;
let num2 = 21;
[num1, num2] = [num2, num1];
console.log(num1, num2);