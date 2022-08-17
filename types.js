//****** (typeof) using this, you can know the type of the existing value ******/
var price = 25;
console.log(typeof price);
var names = "sami";
console.log(typeof names);
var isHappy = true;
console.log(typeof isHappy);


//****** parseInt:: (1) string to number ******//
var num1 = "25";
num1 = parseInt(num1);
console.log(num1);

//****** parseFloat:: (0.1) string to number ******//

var num2 = "0.5";
num2 = parseFloat(num2);
console.log(num2);

//****** One problem only for (0.1 + 0.2) ******//
var price1 = 0.1;
var price2 = 0.2;
sum = price1 + price2;
console.log(sum);