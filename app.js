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
    let readmeContent = contentGen(answers);
    writeToFile('README.md', readmeContent);
};

init();
