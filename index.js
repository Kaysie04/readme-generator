// import necessary files
import inquirer from "inquirer";
import fs from 'fs'
import util from "util"
import generateMarkdown from "./utils/generateMarkdown.js"
const writeFile= util.promisify(fs.writeFile);
const nodeReadME = "./dist/README.md"

// Create an array of questions for user input
 const promptUser = () => {
    return inquirer
    .prompt([
        {   
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description of your project"
        },
        {   type: "input",
            name: "installation",
            message: "What are the installation steps?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended usage?"
        },
        {
            type: "input",
            name: "contributors",
            message: "List the contributors of the project"
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license used",
            choices: [
                "ISC",
                "MIT",
                "Mozilla",
                "Apache",
                "Academic"
            ]
        },

        {
            type: "input",
            name: "tests",
            message: "Are there any tests included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What to do if there are any problems"
        },
        {
            type: "input",
            name: "githubName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email",
        }
    ])
 }

// import generate markdown that was created based on user input and create a .md file
async function init() { 
    try {
        const userAnswers = await promptUser();
        const generateReadme = generateMarkdown(userAnswers);
        await writeFile(nodeReadME, generateReadme)
        console.log("Your readme has been generated! Please check the dist folder for your created readme.md file. ")
    }   catch(err) {
        console.log(err);
        }
} 

init();
