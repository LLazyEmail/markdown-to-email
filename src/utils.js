const fs = require('fs');
const { write } = require('markup-generator');

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

function reactComponentReplace(content){
  return reactComponent.replace(/{content}/g, content);
}

function writeReactComponent(fileName, content, dir = 'generated', message) {

  const result = reactComponentReplace(content);
  write(fileName, result, dir, message);
}


const generateTemplateName = (suffix, ext = 'html') => `${suffix}-${Date.now()}.${ext}`;


// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

module.exports = {

  writeReactComponent,

  FULL_SOURCE,
  CONTENT_SOURCE,
  generateTemplateName,
};
