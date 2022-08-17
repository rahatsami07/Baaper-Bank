// 1>>Array
var siblings = ['Sami', 'Samad', 'Tania'];
console.log(siblings);
var friends = ['Sami', 'Samad', 'Sayeed'];
console.log(friends);
var amount = [5000, 4000, 3000, 2000, 1000];
console.log(amount.length);

// 2>>get element by index::
var numbers = [58, 225, 65, 85, 365];
console.log(numbers[1]);

//2.1>>get element value by index::another way::
var element = numbers[1];
console.log(element);

//2.2>>element value setup by index::
numbers[3] = 100;
console.log(numbers)

//3>> find  index of an element::
var findIndex = numbers.indexOf(365);
console.log(findIndex);

//3.1>>if an index is not of an elements, then if i want to find it!::
var indexFind = numbers.indexOf(25);
console.log(indexFind);