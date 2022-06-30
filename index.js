// import necessary files
import inquirer from "inquirer";
import fs from 'fs'
import util from "util"
import generateMarkdown from "./utils/generateMarkdown.js"
const writeFile= util.promisify(fs.writeFile);
const createdReadme = "./createdReadme/reademe.md"

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
            name: "githubName",
            message: "What is your GitHub username?"
        }
    ])
 }


async function init() { 
    try {
        const userAnswers = await promptUser();
        const generateReadme = generateMarkdown(userAnswers);
        await writeFile(createdReadme, generateReadme)
    }   catch(err) {
        console.log(err);
        }
} 

init();
