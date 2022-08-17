function getSumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        sum += element;
        console.log(index, element, sum);
    }
    return sum;
}
getArray = [20, 15, 80, 54, 65, 99, 100];
getSumArray(getArray);