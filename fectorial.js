///////////////////////
function fectorial(number) {
    let multiply = 1;
    for (let i = 1; i <= number; i++) {
        multiply *= i;
    }
    return multiply;
}
const results = fectorial(10);
console.log(results);

//fectorial-reverse::
function fectorial(number) {
    let multiply = 1;
    for (let i = number; i >= 1; i--) {
        multiply = multiply * i
    }
    return multiply;
}
let fect = fectorial(10);
console.log(fect);

/////////////////////////
function fectorial(number) {
    let multiply = 1;
    let i = 1;
    while (i <= number) {
        i++;
        multiply *= i
    }
    return multiply;
}
const Myresult = fectorial(10);
console.log(Myresult);

// reverseঃঃ

function fectorial(number) {
    let multiply = 1;
    let i = number;
    while (i >= 1) {
        multiply *= i;
        i--;
    }
    return multiply;
}
let result = fectorial(11);
console.log(result)