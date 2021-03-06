//global variables to require needed packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you like to name this read me file?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            {
                key: 'mitBadge',
                name: 'MIT',
                value: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', `This is licensed under MIT License Copyright (c) [year] [fullname]`],

            },
            {
                key:'mozillaBadge',
                name: 'Mozilla',
                value :[`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,`This is licensed under Mozilla Public License Version 2.0`],
            },
            {
                key:'bsdBadge',
                name: 'BSD',
                value :[`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,`This is licensed under Copyright 1994-2004 The FreeBSD Project. All rights reserved.`],
            },
            {
                key: 'apacheBadge',
                name: 'Apache',
                value: [`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`, `This is licensed under Apache License Version 2.0, January 2004 http://www.apache.org/licenses/`],
            },
        ],

    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information is required to use this repository?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What information is required to know about contributions to the repo?'
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => {
        err ? console.error(err) :
            console.log('Success!')
    });

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, '  '));
        const userFile = `${data.name.toLowerCase().split('').join('')}.md`;
        writeToFile(userFile, generateMarkdown(data));
    });

}

// function call to initialize program
init();



