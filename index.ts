#! /usr/bin/env node
import inquirer from "inquirer";
//import chalkAnimation from "chalk-animation";

const todo: string[] = [];
let loop: boolean = true;
while (loop) {
  const userInput: {
    TODO: string;
    doAgain: boolean;
  } = await inquirer.prompt([
    {
      name: "TODO",
      type: "input",
      message: "Enter Your To Do List",
    },
    {
      name: "doAgain",
      type: "confirm",
      message: "Do you want to Enter More in the List",
      default: false,
    },
  ]);
  const { TODO, doAgain } = userInput;
  loop = doAgain;
  if (TODO) {
    todo.push(TODO);
  } else {
    console.log("Kindly Enter Valid Input");
  }

  if (todo.length > 0) {
    console.log("Your TO-Do list :");
    todo.forEach((list) => {
      console.log(list);
    });
  } else {
    console.log("No To-Do List found");
  }
}
