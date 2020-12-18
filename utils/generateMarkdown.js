// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### License

${data.license}

## Table of Contents

-[Description](#Description)

-[Installation](##Installation)

-[Usage](##Usage)

-[Testing](##Testing)

-[Contribute](##Contribute)

-[License](###License)

## Description 

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## Testing

${data.test}

## Contribute

${data.contribute}

## URL's

[GitHub](https://github.com/${data.github})

Email: ${data.email}

`;
}


module.exports = generateMarkdown;
