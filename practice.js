var mac = 85000;
var gaming = 65000;
var lenovo = 45000;
var phone = 25000;

var amount = 40000;

if (amount > mac) {
    console.log("mac");
} else if (amount > gaming) {
    console.log("gaming");
} else if (amount > lenovo) {
    console.log("lenovo");
} else {
    console.log("I'll buy phone");
};

var code = 58;
while (code <= 98) {
    console.log(code);
    code++
};
for (var i = 58; i <= 98; i++) {
    console.log(i)
};

var num = 412;
while (num <= 456) {
    console.log(num);
    num = num + 2
};
for (var i = 412; i <= 456; i = i + 2) {
    console.log(i)
}

var nums = 581;
while (nums <= 623) {
    console.log(nums);
    nums = nums + 2
};
for (var i = 581; i <= 623; i = i + 2) {
    console.log(i)
}


var completes = ['variable', 'types of variable', 'shorthand', 'push', 'pop', 'operation', 'while-loop', 'for-loop', 'condition', 'concatination', 'comparison', 'break', 'continue', 'array', 'array-loop']

for (var i = 0; i < completes.length; i++) {
    var complete = completes[i];
    console.log(complete)
};
for (i = 30; i <= 86; i++) {
    if (i > 44) {
        break
    }
    console.log(i)
}