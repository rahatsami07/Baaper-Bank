//It can remove some particular index...And it can also add some index that the removing place:::


let numbers = [12, 21, 52, 85, 95, 75, 65, 45, 12, 33, 52, 74, 65, 15, 25, 35, 6, 59, 84, 75];

const partial = numbers.splice(2, 3, 11111, 121212);
console.log(partial);
console.log(numbers);