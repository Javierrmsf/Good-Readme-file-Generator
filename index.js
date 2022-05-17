const inquirer = require('inquirer');

const fs = require('fs');

const { title } = require('process');

const generateMarkDown = ({ title, description, installationi, usagei, contributioni, testi, badge}) =>


`# ${title}
 
 ## Description

 ${badge}

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
    message: 'Please select a license',
    name: 'license',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'],
    },
    

  ])
  
  .then((answers) => {
    const readmecontent = generateMarkDown(answers);
    const readmecontent2 = renderLicenseBadge(answers);
  

    fs.writeFile('README.md', readmecontent, readmecontent2, (err) =>
      err ? console.log(err) : console.log('README FILE CREATED')
    );
  });
  function renderLicenseBadge(license) {
      let badge = ""
      if (license = 'Apache 2.0 License'){
          badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      }
      if (license = 'Boost Software License 1.0' ){
          badge ='![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'

      }
      if (license = 'BSD 3-Clause License'){
          badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
      }
  }


  

