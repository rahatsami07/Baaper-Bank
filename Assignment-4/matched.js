// const friends = [{
//         name: 'Abdus Sami as Rahat',
//         age: 16,
//     },
//     {
//         name: 'Abdus as Samad',
//         age: 16.5,
//     },
//     {
//         name: 'Ahmed as Sayeed',
//         age: 16.7,
//     },
// ];



// function matched(friends, search) {
//     const match = [];
//     for (const friend of friends) {
//         if (friend.name.includes(search)) {
//             match.push(friend);
//         }
//     }
//     return match;
// }
// const result = matched(friends, "as");
// console.log(result);




// function compare(a, b) {
//     if (a == b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let results = compare(15, "15");
// console.log(results);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);