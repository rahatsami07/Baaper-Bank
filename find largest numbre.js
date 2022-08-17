// function getHighest(numbers) {
//     let highest = 0;
//     for (i = 0; i < numbers.length; ++) {
//         const index = i;
//         const element = numbers[index];

//         if (element > highest) {
//             highest = element
//         }
//     }
//     return highest
// }

// const high = [584, 125, 158, 196, 657, 852, 951];
// const result = getHighest(high);
// console.log(result);


function getLowest(numbers) {
    let lowest = 0;
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element < lowest) {
            lowest > element
        }
    }
    return lowest;
}
let low = [584, 125, 158, 196, 657, 852, 951];
let result = getLowest(low);
console.log(result)