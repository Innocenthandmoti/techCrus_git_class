// in the order of importation that require the three steps of the modules, first import built in modules, second import thhird party
//  modules and lastly, import custom modules.

import { stdin } from "node:process";
import chalk from "chalk";
import checkAge from "./modules/ageCheck.js";
import formatUserInfo from "./modules/userInfo.js";

console.log(chalk.green("What is your name?"));

// NB: stdin.on, Listens for user input typed into the terminal (standard input), and when the user presses Enter, do
// something with that input.

// .on("data", ...) is an event listener.
// "data" is the event that fires every time the user submits input.

// (input) => { ... } . This is an arrow function that defines what to do when the "data" event happens.
// input is what the user types.
stdin.on("data", (input) => {
  const name = String(input).trim();
  console.log(chalk.yellow(`Oh your name is ${name}!`));

  console.log(chalk.green(`what is your age`));

  stdin.once("data", (input) => {
    const age = parseInt(String(input).trim()); // two type casting
    const status = checkAge(age); // This calls a custom function from your ./modules/ageCheck.js file.

    const formatUserMessage = formatUserInfo(name, age, status); // This calls another custom function from userInfo.js.

    if (age >= 18) {
      console.log(chalk.green(formatUserMessage));
    } else {
      console.log(chalk.blue(formatUserMessage));
    }

    //console.log(chalk.green(`Your age is ${age}.`));
    process.exit();
  });
});
