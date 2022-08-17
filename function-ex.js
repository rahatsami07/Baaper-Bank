function getAverage(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const AverageMarks = totalMarks / 3;
    return AverageMarks;

}
const assignment1Mark = 60;
const assignment2Mark = 58;
const assignment3Mark = 59;
const MyAverageMarks = getAverage(assignment1Mark, assignment2Mark, assignment3Mark);

console.log("My average Assignment marks:", MyAverageMarks)