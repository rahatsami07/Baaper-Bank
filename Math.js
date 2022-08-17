// Math.abs::

const HerAge = 18;
const MyAge = 21;
const gap = Math.abs(HerAge - MyAge);
console.log(gap)
if (gap < 2) {
    console.log("Ready to marrage");
} else {
    console.log("Nothing to worry. Age doesn't metter.Let's Marrage.");
}


// round::
const number = 5.2545;
console.log(number)
const fullNumber = Math.round(number);
console.log(fullNumber);

//ceil::
const num1 = 5.000012;
console.log('Problem=>', num1);
const getTheUpNumber = Math.ceil(num1);
console.log('Result=>', getTheUpNumber);

//floor::
const num2 = 4.99999999;
console.log('Problem=>', num2);
const getTheDownNumber = Math.floor(num2);
console.log('Result=>', getTheDownNumber);


//pow: It's mean power::

const powerOf7WhichPowerIs3 = Math.pow(7, 3);
console.log('Result=>', powerOf7WhichPowerIs3);


//Random Number::It's display different number after refresh :

const NumberRandom = Math.round(Math.random() * 100);
console.log(NumberRandom);