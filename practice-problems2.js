//******* First Problem Start********//
var fruits = ['Apple', 'Banana', 'orange'];

//Find Index>>
var find = fruits.indexOf("Banana");
console.log(find);

//Delete last element>>
fruits.pop();
console.log(fruits);

//Add an element>>
fruits.push("watermelon")
console.log(fruits);
//******* First Problem End********//


//******* Secound Problem Start********//

var marks = 70;
var myResult = 80;
var tomResult = 70;
var janeResult = 56;
var peterResult = 44;
var johnResult = 35;


if (myResult <= marks) {
    console.log("A+");
} else if (tomResult >= marks) {
    console.log("A");
} else if (janeResult >= marks) {
    console.log("A-");
} else if (janeResult >= marks) {
    console.log("B");
} else if (janeResult >= marks) {
    console.log("");
}