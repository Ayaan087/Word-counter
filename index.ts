import inquirer from "inquirer"
let ans = await inquirer.prompt([
    {
        name:"Word",
        type:"input",
        message:"Enter the Input"
    }
])

let words = ans.sentence.Trim().split(" ")
console.log(`Your sentence word count is ${words.length}`)