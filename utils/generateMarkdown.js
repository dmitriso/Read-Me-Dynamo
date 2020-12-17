// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
<p> ${data.description} </p>
## Installation
<p> ${data.install} </p>
## Usage
<p> ${data.usage} </p>
## Testing
<p> ${data.test} </p>
## Contribute
<p> ${data.contribute} </p>
## License
<p> ${data.license} </p>
`;
}

module.exports = generateMarkdown;
