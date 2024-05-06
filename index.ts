import inq from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \tWelcome To Currency Converter\n"));
//currency list and its rate

let exchange_rate : any= {
    "USD" : 1,
    "EUR" :0.9,
    "PKR" :280,
    "JYP" :113,
    "AUD":1.65,
    "CAD" :1.3
}
// User to select currencies to convert from to
let user = await inq.prompt([
    {
        name : "from_currency",
        type:"list",
        message:"select the curreny to convert from: ",
        choices :["USD","EUR","PKR","JYP","AUD","CAD"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices :["USD","EUR","PKR","JYP","AUD","CAD"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount  to convert:",
    }
])
//currency conversion from formula

let from_amount =  exchange_rate[user.from_currency];
let to_amount = exchange_rate[user.to_currency];
let amount = user.amount;

// formula conversion

let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

//display the converted amount

console.log(`Converted Amount = ${converted_amount}`);