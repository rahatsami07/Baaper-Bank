//Hour to Minute
function convert(hour) {
    const minute = hour * 60;
    return minute;
}
const convertHourToMinte = convert(2);
console.log(convertHourToMinte, "minute");

// Minute to Secound

function convert(minute) {
    const secound = minute * 60;
    return secound;
}
const convertMinuteToSecound = convert(60);
console.log(convertMinuteToSecound, "secound");

//Hour to Secound

function convertHToS(hour) {
    const Secound = hour * 3600;
    return Secound;
}
const convertHouToSecound = convertHToS(2);
console.log(convertHouToSecound, "Secound");