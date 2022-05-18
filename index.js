const inquirer = require('inquirer');

const fs = require('fs');

const util = require ('util');



function generateMarkDown (data) { 

    let badgeimage;
    let licenselink;
    let licensesection;
    let tableofcontents;
    

    if (data.license === "IBM Public License Version 1.0") {
        badgeimage ="![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
        licenselink = "https://opensource.org/licenses/IPL-1.0"
        licensesection = "license"
        tableofcontents = "- [License](#license)"
    }

    if (data.license === "The MIT License") {
        badgeimage ="![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
        licenselink = "https://opensource.org/licenses/MIT"
        licensesection = "license"
        tableofcontents = "- [License](#license)"
    }


   if (data.license === "No License") {
        badgeimage = ''
        licenselink = ''
        licensesection = ''
        tableofcontents = ''
    }

   



    
    
    return`# ${data.title}
${badgeimage}
 

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Contribution](#contribution)

- [Test](#test)

- [Questions](#questions)

${tableofcontents}


## Description
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
My Github account is: ${data.account}
If you have any questions please contact me at:${data.email}

## ${licensesection}

${licenselink}


  
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
    choices: ["IBM Public License Version 1.0", "The MIT License", "No License", ]
    },
    {
    type: 'input',
    name: 'account',
     message: 'Please write your github account',
    },
    {
     type: 'input',
     name: 'email',
     message: 'please write your email',
    },
    

  ])
 
  

 

prqu()
.then((data) => createfile('additionalREADME.md', generateMarkDown(data)))


    .then(() => console.log('README file made succesfully '))


    .catch((err) => console.error(err));

    
const createfile = util.promisify(fs.writeFile);