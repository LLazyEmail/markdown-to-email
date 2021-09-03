const fs = require('fs');
const chalk = require('chalk');
const { forEach } = require('lodash');

// @todo it's very bad to use converter here, i think it;s deserve a separated file.
// this utls file should serve a source for a very small and common methods.
// module.export = Converter;

function checkWarnings(warnings) {  

  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;
      console.log(chalk.yellow(message));
    }
  });
}

function checkErrors(errors) {
  if (Object.values(errors).includes(false)) {

    // @TODO replace with lodash
    forEach(errors, (_, error) => {
      if (!errors[error]) {
        const message = `ERROR source.md doesn't have ${error}`;
        console.log(chalk.red(message));
      }
    });

    const message = 'The full template has not been parsed!';
    console.log(chalk.red.bold(message));
    return true;
  }
  return false;
}

function displayCLIErrors(errors, warnings) {
  if (checkErrors(errors)) {
    // there should be something in here
  } else {
    checkWarnings(warnings);
  }
}



function checkHtml(content) {
  const searchPattern = new RegExp('(<table|<tr>|<td|<tbody>)', 'i');
  let ind, tempStr = '';

  if (process.env.noAdv) {
    ind = content.indexOf('<h1 class="mc-toc-title"');
  } else {
    ind = content.indexOf('</table></span></span></div>');
  }

  // hmm, it can be a problem
  for (let i = ind; i < ind + 5000; i++) {
    tempStr += content[i];
  }

  if (searchPattern.test(tempStr)) {
    console.log(chalk.green("Content has correct html!!!"));
  } else {
    console.log(chalk.yellow("Content has not correct html!!!"));
  }
}


const MESSAGE_HTML_CONTENT_ONLY = 'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE = 'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 = 'The full-template has been parsed successfully2';


const MESSAGE_REACT_FULL_TEMPLATE = 'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';



const reactComponent = `
import React from "react";

const Content = () => {
  return (
    <>
      {content}
    </>
  );
};

export default Content;
`;

function writeReactComponent(fileName, content, dir = 'generated', message) {
  // isFolderExists(dir);
  // @todo finish https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise/50768253

  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing
  const result = reactComponent.replace(/{content}/g, content);

  fs.writeFileSync(_path, result, (err) => {
    if (err){
      throw new Error('file not written');
    } 
  });

  // i dont like this line @TODO change it
  message && console.log(`file has been written successfully${fileName}`);
}

function write(fileName, content, dir = 'generated', message) {
  // isFolderExists(dir);
  // @todo finish https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise/50768253

  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing

  fs.writeFileSync(_path, content, (err) => {
    if (err) throw new Error('file not written');
  });

  message && console.log(`file has been written successfully${fileName}`);
}

function readSourceFile(fileName) {
  return fs.readFileSync(fileName, { encoding: 'utf-8' });
}

function isFolderExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}


// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

module.exports = {
  write,
  writeReactComponent,
  readSourceFile,
  isFolderExists,

  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,
  
  FULL_SOURCE,
  CONTENT_SOURCE
  
  
  
MESSAGE_HTML_CONTENT_ONLY,
MESSAGE_HTML_FULL_TEMPLATE,
MESSAGE_HTML_FULL_TEMPLATE2,

MESSAGE_REACT_FULL_TEMPLATE,
MESSAGE_REACT_CONTENT
};
