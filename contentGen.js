const license = require('./questions');



function licenseBadge(license) {
    
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';   
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        default:
            return '';
    }
}

function licenseLink(license) { 
   
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'Apache':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'Mozilla':
            return 'https://opensource.org/licenses/MPL-2.0';
        default:
            return '';
    }
}

function licenseContent(license) {
   
    return`
    ${licenseBadge(license)};  
    For more information, visit ${licenseLink(license)}`
}

function contentGen(data) {
    return `# ${data.title}
    Created by ${data.author}
    ${licenseBadge(license)}

    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Testing](#testing)
    - [License](#license)

    ## Installation 
    ${data.installation}

    ## Usage 
    ${data.usage}   

    ## Contributing
    ${data.contributing}
    
    ## Testing
    ${data.testing}
    
    ## License
    ${licenseContent(data.license)}
    `;
}

module.exports = contentGen;