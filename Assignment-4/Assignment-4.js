///////////////////////////**************  Assignment=4   ******************************//////////////////////////////

// Problem = 1 Start::

function radianToDegree(radian) {

    if (typeof valueOfRadian !== 'string or boolian') {
        return 'Invalid Code....Please provide a number'
    } else {
        const degree = radian * 57.2958
        return degree.toFixed(2);
    }
}
let valueOfRadian = 5;

// Problem = 1 End//


//******************************************  Break  ***************************************************************//


//Problem = 2 start::

function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return 'Invalid Code....Please provide a String'
    } else if (fileName.endsWith(".js")) {
        return true;
    } else {
        return false
    }
}
let jsFileName = "app.js";



// Problem = 2 end//


//******************************************  Break  ***************************************************************//

//Problem = 3 start::

function oilPrice(dieselQuantity, petrolQuantity, ocatneQuantity) {

    let perLiterDiesel = 114;
    let perLiterPetrol = 130;
    let perLiterOcatne = 135;

    if (typeof perLiterDiesel === "boolean or String") {
        return 'Invalid Code....Please provide a Number'
    } else {
        let totalDieselPrice = perLiterDiesel * dieselQuantity;
        let totalPetrolPrice = perLiterPetrol * petrolQuantity;
        let totalOctanePrice = perLiterOcatne * ocatneQuantity;
        const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalPrice;
    }
}
let dieselQuantity = 10;
let petrolQuantity = 20;
let ocatneQuantity = 30;

// Problem = 3 End//


//******************************************  Break  ***************************************************************//
//Problem = 4 start::

function publicBusFare(passangers) {
    if (typeof passangers === "string or bollean") {
        return 'Invalid Code....Please provide a Number'
    } else {
        let goingWithBus = TotalPassanger % BusPassanger;
        let goingWithMicroBus = goingWithBus % MicroBusPassanger;
        let restPassanger = goingWithMicroBus;
        let publicBusTotalFee = restPassanger * publicBusFeePerPerson;
        return publicBusTotalFee;
    }
}
let TotalPassanger = 235;
let BusPassanger = 50;
let MicroBusPassanger = 11;
let publicBusFeePerPerson = 250;


// Problem = 4 end//

//******************************************  Break  ***************************************************************//

//Problem = 5 start::


function isBestFriend(bestFriend1, bestFriend2) {
    if (typeof bestFriend1.name !== 'string' || typeof bestFriend2.name !== "string") {
        return 'Invalid Code....Please provide a string'
    } else if (bestFriend1.name === bestFriend2.myBestFriend || bestFriend1.myBestFriend === bestFriend2.name) {
        return true;
    } else {
        return false;
    }
}
const bestFriend1 = {
    name: "Sami",
    myBestFriend: "samad",
}
const bestFriend2 = {
    name: 'Samad',
    myBestFriend: "Sami",
}


// Problem = 5 End//