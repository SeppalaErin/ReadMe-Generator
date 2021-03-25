const fs = require('fs');
const inquirer = require('inquirer');

const questions = ["What is the title of your application?", "How would you describe your applicaiton?", "How can users install your application?", "How would you describe the usage of your application?", "Who were the contributors to this application?", "What type of license does this application have?", "How should users test your application?", "What is your GitHub username?", "What is your email address?"];

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: questions[0]
    },
    {
        type: "input",
        name: "description",
        message: questions[1]
    },
    {
        type: "input",
        name: "installation",
        message: questions[2]
    },
    {
        type: "input",
        name: "usage",
        message: questions[3]
    },
    {
        type: "input",
        name: "contributions",
        message: questions[4]
    },
    {
        type: "list",
        name: "license",
        message: questions[5],
        choices: [
            "MIT",
            "ISC",
            "Apache 2.0",
            "Boost 1.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "CC0 2.0",
            "CC BY 4.0",
            "CC BY-SA 4.0",
            "CC BY-NC 4.0",
            "CC BY-ND 4.0",
            "CC BY-NC-SA 4.0",
            "CC BY-NC-ND 4.0",
            "EPL 1.0",
            "GPL v3",
            "GPL v2",
            "AGPL v3",
            "LGPL v3",
            "FDL v1.3",
            "IPL 1.0",
            "MPL 2.0",
            "ODC BY",
            "ODbL",
            "PDDL",
            "Perl",
            "Artistic 2.0",
            "OFL 1.1",
            "Unlicense",
            "WTFPL",
            "Zlib"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: questions[6]
    },
    {
        type: "input",
        name: "username",
        message: questions[7]
    },
    {
        type: "input",
        name: "email",
        message: questions[8]
    }
])

.then(data => {
    return fs.writeFileSync("README.md", genREADME(data));
})

.catch(err => {
    if(err){throw err}
})

function genREADME(answers) {
    return `# ${answers.title}
## Table of Contents
* Description
* Installation
* Usage
* Contributions
* Licensing
* Tests
* Questions
## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributions
${answers.contributions}
## Licensing
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
## Tests
${answers.tests}
## Questions
* My repositories can be found at https://www.github.com/${answers.username}
* For any questions regarding this application, you can email me at ${answers.email}`;
}