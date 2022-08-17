///////// My Height :: Feet to Inches::///////////

function height(Feet) {
    const myHeight = Feet * 12;
    return myHeight;
}
const myFeet = 5.4;
const myInches = height(myFeet);
console.log("My Height In Inche:", myInches);


///////// My Height ::Inches to Feet::///////////

function Height(inches) {
    const heightInFeet = inches / 12;
    return heightInFeet;
}
const MyHeightInInches = 64.8;
const MyHeightInFeet = Height(MyHeightInInches);
console.log("My Height In Feet:", MyHeightInFeet)