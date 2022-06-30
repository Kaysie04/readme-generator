// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  
  <h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
 
    ## Description
    ${data.description}

    ## Installation Guide
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributors}

    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${data.license} license. 

    ##GitHub Username
    ${data.githubName}
`;
}

export default generateMarkdown;
