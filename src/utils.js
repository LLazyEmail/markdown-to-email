const fs = require('fs');
const chalk = require('chalk');
const { forEach } = require('lodash');

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
    if (err) {
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

const generateTemplateName = (suffix, ext = 'html') => `${suffix}-${Date.now()}.${ext}`;

// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

module.exports = {
  write,
  writeReactComponent,
  readSourceFile,
  isFolderExists,

  FULL_SOURCE,
  CONTENT_SOURCE,
  generateTemplateName,
};
