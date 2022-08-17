/* break */

//let's try it using For Loop::::
//
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (number > 60) {
        break;
    }
    console.log(number);
}

//
var items = ['watch', 'bottle', 'attor', 'wallet', 'phone', 'pen'];
for (var i = 0; i < items.length; i++) {
    item = items[i];
    if (item == 'attor') {
        continue;

    }
    console.log(item)
}

var i = 0;
for (i = 0; i < 5; i++) {};
console.log(i);