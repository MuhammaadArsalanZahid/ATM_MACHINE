#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;

//Print welcome message 
console.log(chalk.blue("\n \tWelcome to Arsalan_Zahid-ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
])
if (pinAnswer.pin === myPin){
console.log(chalk.green("\nPin is correct, Login Successfully!\n"));
//console.log(`Current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message:"Select an operation:",
        choices:["WithDraw Amount","Check Balance"]
    }
])

if(operationAns.operation ==="WithDraw Amount"){
    let withdrawAns = await inquirer.prompt([
    {
         name: "withdrawMethod",
         type: "list",
         message: "Select a withdrawal method:",
         choices: ["Fast Cash","Enter Amount"]
}
])
if(withdrawAns.withdrawMethod === "Fast Cash"){
    let fastCashAns = await inquirer.prompt([
    {
        name: "fastCash",
         type: "list",
        message: "Select Amount:",
        choices:["1000","3000","5000","10000","20000","30000","50000"]
    }
])
if(fastCashAns.fastCash > myBalance){
    console.log(chalk.red("Insufficient Balance"));
}
else{
    myBalance -= fastCashAns.fastCash
    console.log(chalk.yellowBright(`${fastCashAns.fastCash} withdraw Successfully`));
    console.log(chalk.blueBright(`Your Remaining Balance is: ${myBalance}`));
}
}
    else if(withdrawAns.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: "Enter the amount to withdraw:"
            }
      ])
      if(amountAns.amount > myBalance){
          console.log(chalk.red("Insufficient Balance"));
      }
      else{
          myBalance -= amountAns.amount;
          console.log(chalk.greenBright(`${amountAns.amount} Withdraw Successfully`));
          console.log(chalk.blue(`Your Remaning Balance is:${myBalance}`));
      }
    }

   }
   else if(operationAns.operation === "Check Balance"){
console.log(chalk.blueBright(`Your Account  Balance is:${myBalance}`));
   }
}
else {
    console.log(chalk.red("Pin is Incorrect, Try Again"));
}
