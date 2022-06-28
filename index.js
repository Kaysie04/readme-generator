// import necessary files
import inquirer from "inquirer";
import fs from "fs"
import util from "util"
import generateMarkdown from "./utils/generateMarkdown"

// Create an array of questions for user input
 const userPrompts = () => {
    return inquirer
    .prompt([
        {   
            type: "input",
            name: "projectTitle",
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
            message: "What is the inteded usage?"
        },
        {
            type: "input",
            name: "contributors",
            message: "List the contributors of the project"
        },
        {
            type: "list",
            name: "licenses",
            message: "Please select the license used"
        }   
    ])
 }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
