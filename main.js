import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 9000;
let myPin = 1234;
console.log(chalk.blue("\n\tWelcome to code with Fatima- Atm Machine\n\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.yellow("Pin is correct, Login successfully!"));
    //console.log(`current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: (chalk.yellow("Select an operation:")),
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt({
            name: "withdrawMethod",
            type: "list",
            message: (chalk.yellow("Select a withdrawal method:")),
            choices: ["Fast Cash", "Enter Amount"]
        });
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let FastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: (chalk.yellow("Select Amount:")),
                    choices: [1000, 2000, 3000, 9000]
                }
            ]);
            if (FastCashAns.FastCash > myBalance) {
                console.log(chalk.blue("Insufficient Balance"));
            }
            else {
                myBalance -= FastCashAns.FastCash;
                console.log(`${FastCashAns.FastCash}withdraw successfully`);
                console.log(`Your remaining balance is:${myBalance}`);
            }
        }
        if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: (chalk.yellow("Enter the amount to withdraw:"))
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.blue("Insufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.blue("Pin is Incorrect, try again"));
}
