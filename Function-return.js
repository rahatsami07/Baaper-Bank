/////////////////////////////
function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}
var total = add(60, 40);
console.log("total:", total);


///////////////
function bringShingara(money) {
    console.log(money)
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;

}
var total = bringShingara(200);
console.log("total Shingara:", total);