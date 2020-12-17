// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

-[Description](#Description)

-[Installation](##Installation)

-[Usage](##Usage)

-[Testing](##Testing)

-[Contribute](##Contribute)

-[License](##License)

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

## License

${data.license}
`;
}

module.exports = generateMarkdown;
