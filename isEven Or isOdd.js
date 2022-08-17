function EvenOrOdd(number) {
    const reminder = number % 2;
    if (reminder == 1) {
        console.log("This number is an Odd number")
    } else {
        console.log("This number is an Even NUmber")
    }
}
EvenOrOdd(6);

function TrueOrFlase(num) {
    const reminder = num % 2;
    if (reminder === 0) {
        return true
    } else {
        return false
    }
}
const myNumberIsEven = TrueOrFlase(12);
console.log(myNumberIsEven);
const HerNumberIsOdd = TrueOrFlase(15);
console.log(HerNumberIsOdd);