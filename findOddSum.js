function getOddSumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        if (element % 2 !== 0) {
            console.log(index, element, sum);
        }
    }
}
const getArray = [25, 28, 78, 95, 85, 64, 60];
getOddSumArray(getArray)