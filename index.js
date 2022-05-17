const inquirer = require('inquirer');

const fs = require('fs');

const util = require ('util');



function generateMarkDown (data) { 

    let badgeimage = ""
    if (license = 'Apache 2.0 License'){
        badgeimage = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    if (license = 'Boost Software License 1.0' ){
        badgeimage ='![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'

    }
    if (license = 'BSD 3-Clause License'){
        badgeimage = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    }
    
    return`# ${data.title}
 
 ## Description

 ${badgeimage}

${data.description}

## Installation

${data.installationi}

## Usage 

${data.usagei}

## Contribution

${data.contributioni}

## Test 

${data.testi}

## Questions


  
   `;}

   const prqu = () =>
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
 
  
//const init = () => {
  //prqu ()

  //.then((data) => {
    

   // fs.writeFile('README.md', generateMarkDown(data),);
  //});
//} 

//init ()

 

prqu()
.then((data) => createfile('generatedREADME.md', generateMarkDown(data)))


    .then(() => console.log('README file made succesfully '))


    .catch((err) => console.error(err));

    
const createfile = util.promisify(fs.writeFile);