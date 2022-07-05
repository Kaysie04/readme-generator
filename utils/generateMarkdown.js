
// Create a function to generate markdown for README
function generateMarkdown(data) {

  return ` 

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation Guide
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributors
    ${data.contributors}

    ## Tests
    ${data.tests}

  ## License   

    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
    This application is covered by the ${data.license} license. 

  ## Questions
    ${data.questions}<br />
    <br />
    GitHub: ${data.githubName}<br />
    <br />
    Email: ${data.email}
  `;
}

export default generateMarkdown;
