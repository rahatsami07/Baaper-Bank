function getLeapYear(year) {
    let reminder = 0;
    for (i = 0; i < year.length; i++) {
        const index = i;
        const element = year[index];
        console.log();
        const yearReminder = element % 4;
        if (yearReminder == 0) {
            console.log([element])
        }
    }
}
const YearArray = [2023, 2024, 2025, 2028, 2030];
getLeapYear(YearArray);