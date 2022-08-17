function leapYear(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        console.log(year, " is a leap Year", year)
    } else {
        console.log(year, "is not a leap Year")
    }
}
leapYear(2005);