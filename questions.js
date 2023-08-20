const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'author',
    },
    
    {
        type: 'input',
        message: 'Briefly describe your project',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Select your license type',
        name: 'license',
        choices: ['MIT', 'Apache', 'Mozilla'],
    },
    {
        type: 'input',
        message: 'Provide any installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide any usage instructions',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any contribution instructions',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide test instructions',
        name: 'testing',
    },
];

module.exports = questions;