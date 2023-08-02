const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'Author',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Project Title',
    },
    {
        type: 'input',
        message: 'Briefly describe your project',
        name: 'Project Description',
    },
    {
        type: 'checkbox',
        message: 'Select your license type',
        name: 'License',
        choices: ['MIT', 'Apache', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        message: 'Provide any installation instructions',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide any usage instructions',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Provide any contribution instructions',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Provide test instructions',
        name: 'Testing',
    },
])
.then((data) => {
    const readmeContent = `

    # ${data['Project Title']}
    Created by ${data['Author']}

    ## Description
    ${data['Project Description']}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Testing](#testing)
    * [License](#license)
    
    ## Installation
    ${data['Installation']}

    ## Usage
    ${data['Usage']}

    ## Contributing
    ${data['Contributing']}

    ## Testing
    ${data['Testing']}

    ## License
    ${data['License']}
`;

fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
        console.error('Error writing READMA.md', err);
    } else {
        console.log('Successfully wrote README.md');
    }
});
});