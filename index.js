const inquirer = require('inquirer');

const fs = require('fs');

const util = require ('util');



function generateMarkDown (data) { 

    let badgeimage = ""
    let licenselink = ""
    let licensesection = ""
    let tableofcontents = ""
    

        
    
    if (data.license = 'Boost Software License 1.0' ){
        badgeimage ='![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
        licenselink = 'https://www.boost.org/LICENSE_1_0.txt'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'

    }

    if (data.license = 'BSD 3-Clause License'){
        badgeimage = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
        licenselink = 'https://opensource.org/licenses/BSD-3-Clause'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if (data.license = 'BSD 2-Clause License'){
        badgeimage = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
        licenselink = 'https://opensource.org/licenses/BSD-2-Clause'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'CC0'){
        badgeimage ='![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
        licenselink = 'http://creativecommons.org/publicdomain/zero/1.0/'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'CC0 1.0'){
        badgeimage ='![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)'
        licenselink = 'http://creativecommons.org/publicdomain/zero/1.0/'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }
    
    if(data.license = 'Attribution 4.0 International'){
        badgeimage ='![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)'
        licenselink = 'https://creativecommons.org/licenses/by/4.0/'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'CC BY 4.0'){
        badgeimage ='![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)'
        licenselink = 'https://creativecommons.org/licenses/by/4.0/'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'Attribution-ShareAlike 4.0 International'){
        badgeimage ='![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)'
        licenselink = 'https://creativecommons.org/licenses/by-sa/4.0/'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'Eclipse Public License 1.0'){
        badgeimage ='![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
        licenselink = 'https://opensource.org/licenses/EPL-1.0'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'GNU GPL v3'){
        badgeimage ='![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        licenselink = 'https://www.gnu.org/licenses/gpl-3.0'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'IBM Public License Version 1.0'){
        badgeimage ='![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
        licenselink = 'https://opensource.org/licenses/IPL-1.0'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'The MIT License'){
        badgeimage ='![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        licenselink = 'https://opensource.org/licenses/MIT'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'Mozilla Public License 2.0'){
        badgeimage ='![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
        licenselink = 'https://opensource.org/licenses/MPL-2.0'
        licensesection ='license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'Attribution License (BY)'){
        badgeimage ='![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)'
        licenselink = 'https://opendatacommons.org/licenses/by/'
        licensesection = 'license'
        tableofcontents = '- [License](#license)'
    }

    if(data.license = 'No License'){
        badgeimage =''
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

##${licensesection}

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
    choices: [ 'No License','Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0','CC0 1.0','Attribution 4.0 International', 'CC BY 4.0', 'Attribution-ShareAlike 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)'],
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