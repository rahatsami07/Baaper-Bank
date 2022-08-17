// Programin-hero[Assaingment-4]
// Problem-1: radianToDegree start.
let radianValue = 25;

function radianToDegree(radian) {

    if (typeof radianValue !== 'number') {
        return 'Inavlid output.....Privide a number value';
    }
    let degree = radian * 57.2957795;
    let degreeOutput = degree.toFixed(2);
    return degreeOutput;
}

let index = radianToDegree(radianValue);
console.log(index);
// Problem-1: radianToDegree End.
// Problem-2: isJavaScriptFile Start
function isJavaScriptFile(fileName) {
    if (typeof fileName === 'number') {
        return 'Invalid output..... Please provide a string value'
    }
    if (fileName.endsWith('js')) {
        return true;
    } else {
        return false;
    }
}
let file = 'index.js';
let fileIndex = isJavaScriptFile(file);
console.log(fileIndex);
// Problem-2: isJavaScriptFile End
// Problem-3: oilPrice start
function oilPrice(dieselQuantity, petrolQuantity, ocatneQuantity) {
    let perLtrDiesel = 114;
    let perLtrPetrol = 130;
    let perLtrOctane = 135;
    if (
        typeof perLtrDiesel !== 'number' || typeof perLtrPetrol !== 'number' || typeof perLtrOctane !== 'number' || typeof dieselQuantity !== 'number' || typeof petrolQuantity !== "number" || typeof ocatneQuantity !== "number"
    ) {
        return 'invalid Output....Provide a number';
    }
    let totalDieselPrice = perLtrDiesel * dieselQuantity;
    let totalPetrolPrice = perLtrPetrol * petrolQuantity;
    let totalOctanePrice = perLtrOctane * ocatneQuantity;
    let totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalPrice;
}
let dieselQuantity = 30;
let petrolQuantity = 20;
let ocatneQuantity = 10;
let oil = oilPrice(dieselQuantity, petrolQuantity, ocatneQuantity);
console.log(oil);
// Problem-3: oilPrice End
// Problem 4: publicBusFare Start
function publicBusFare(person) {
    if (
        typeof person == 'String'
    ) {
        return 'please Provide a number';
    }
    let goingWithReservedBus = passanger % reservedBus;
    let goingWithMicroBus = goingWithReservedBus % Microbus;
    let restPeople = goingWithMicroBus;
    let publicBusTotalFees = restPeople * publicBusFeesPerPerson;
    console.log(publicBusTotalFees);
}
let passanger = 235;
let publicBusFeesPerPerson = 250;
let reservedBus = 50;
let Microbus = 11;
let passangerIndex = publicBusFare(passanger);
// Problem 4: publicBusFare End
// Problem-5: isBestFriend Start
function isBestFriend(firstRelation, secondRelation) {
    if (
        typeof firstRelation.name === 'number' || typeof firstRelation.friend === 'number' || typeof secondRelation.friend === 'number' || typeof firstRelation.name === 'number'
    ) {
        return 'Inavlid output.....Privide a number value';
    }
    if (
        firstRelation.name == secondRelation.friend && firstRelation.friend == secondRelation.name
    ) {
        return true;
    } else {
        return false;
    }
}
let firstRelation = {
    name: 'Samad',
    friend: 'Rahat'
}
let secondRelation = {
    name: 'Rahat',
    friend: 'Samad'
}
let relationIndex = isBestFriend(firstRelation, secondRelation);
console.log(relationIndex);
// Problem-5: isBestFriend End