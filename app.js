const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const contentGen = require('./contentGen')

 function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    }

    
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log("Starting")
    let readmeContent = contentGen(answers);
    console.log("Generating")
    writeToFile('README.md', readmeContent);
    console
};

init();
