#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated and show result, done.
console.log("Welcome to Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
}
else {
    console.log("Oh Sorry! You guessed a wrong number.");
}
