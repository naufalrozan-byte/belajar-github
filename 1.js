const readline = require("readline-sync");

const number1 = readline.question("Input the first number: ");
const number2 = readline.question("Input the second number: ");
const number3 = readline.question("Input the third number: ");

const average = (Number(number1) + Number(number2) + Number(number3)) / 3;

console.log(average + " is the average of " + number1 + ", " + number2 + ", and " + number3);