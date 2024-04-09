import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let totalBalance: number = 14000; // Dollar
let pinNumber: number = 171209;

let pinEntered = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinEntered.pin === pinNumber) {
  let atmQuestions = await inquirer.prompt([
    {
      name: "accountType",
      message: "Select your accountType ",
      type: "list",
      choices: ["Current Account", "Saving Account"],
    },

    {
      name: "transMethod",
      message: "Select your transaction Method",
      type: "list",
      choices: ["Cash Withdraw", "Fast Cash"],
    },
  ]);

  if (atmQuestions.transMethod === "cash withdraw") {
    let cashwithdrawamount = await inquirer.prompt([
      {
        name: "withdraw",
        message: "Enter the amount you want to withdraw",
        type: "number",
      },
    ]);
    if (totalBalance >= cashwithdrawamount.withdraw){
     totalBalance -= cashwithdrawamount.withdraw 
     
      console.log(`your Total Balance is : ${(totalBalance)}`) 
}
    else{ 
    console.log("insuficient Balance")
    }
  }
  else{
    let fastCashAmount = await inquirer.prompt(
      [

      {
       
        name:'fastCash',
        message:'Select the amount you want to withdraw',
        type:'list',
        choices:[
          "5000",
          "8000",
          "12000",
        ]

    }]);
    if (totalBalance >= fastCashAmount.fastCash){ 
      totalBalance -= fastCashAmount.fastCash
 
       console.log(`your Total Balance is :${(totalBalance)}`)
     }
     else{ 
     console.log("insuficient Balance")
     }
  }
}