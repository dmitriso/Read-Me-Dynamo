//global variables to require needed packages
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
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
        choices:['MIT','IBM','Mozilla'],

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
function writeToFile(, data) {
    // const userFile = `${data.title.toLowerCase().split('').join('')}.json}`;

//    fs.writeFile(userFile,JSON.stringify(response, null, '\t'), (err) =>
//    err ? console.error(err) : console.log('Success!'))
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, '  '));
  });
}

// function call to initialize program
init();





