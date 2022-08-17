const uniqueNames = ['sami', 'samad', 'sayeed', 'sami', 'jahangir', 'samad', 'tania', 'sayeed', 'rahat', 'sami', 'tania'];

function getUniqueNames(names) {
    const unique = [];
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        // console.log(name);
        if (unique.includes(names) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const removeDuplicateName = getUniqueNames(uniqueNames);
console.log(removeDuplicateName)