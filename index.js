const inquirer = require('inquirer');

const fs = require('fs');

const { title } = require('process');

const generateMD = ({ title, description, installationi, usagei, contributioni, testi }) =>
`# ${title}
 
 ## Description

${description}

## Installation

${installationi}

## Usage 

${usagei}

## Contribution

${contributioni}

## Test 

${testi}

## Questions


  
   `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a description of your project.',
    },
    {
      type: 'input',
      name: 'installationi',
      message: 'Please write the necessary installation instructions for this project.',
    },
    {
      type: 'input',
      name: 'usagei',
      message: 'Please write the usage information.',
    },
    {
      type: 'input',
      name: 'contributioni',
      message: 'please write the contribution guidelines for this project.',
    },
    {
      type: 'input',
      name: 'testi',
      message: 'Please write your test instructions',
    },
    {
    type: 'list',
    message: 'Please select a github license',
    name: 'license',
    choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((answers) => {
    const readmecontent = generateMD(answers);

    fs.writeFile('README.md', readmecontent, (err) =>
      err ? console.log(err) : console.log('README FILE CREATED')
    );
  });
