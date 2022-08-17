// //*************(>, <, ==, ===, !=, !==, >=, <=,)************//
//Geater than::
console.log(6 > 5);
console.log(5 > 6);

//Less than::
console.log(5 < 6);
console.log(6 < 5);

//Equal::
console.log(6 == 6);
console.log(6 === 5);

//Not equal::
console.log(5 != 6);
console.log(5 !== 5);

//Geater than or equal::
console.log(5 <= 6);
console.log(5 <= 3);

//Less than or equal::
console.log(6 >= 5);
console.log(10 >= 11);

//Multiple Condition::
//1>>
var mobile1 = 13000;
var mobile2 = 15000;
var phone1 = 19000;
var phone2 = 21000;
var leptop1 = 45000;
var leptop2 = 50000;

var multiple = mobile2 > mobile1 && phone2 > phone1 && leptop2 > leptop1;
console.log(multiple);

//2>>
var leptop = 50000;
var computer = 70000;
var Iphone = 150000;
var samsungS21 = 94000;

var MultipleDifferent = leptop < computer || Iphone > samsungS21;
console.log(MultipleDifferent);