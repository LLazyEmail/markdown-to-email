const { write } = require('markup-generator');
const reactLayouts = require('atherdon-newsletter-react');

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


// const {
//     parse, 
//     parseFullTHing,
//   } = require('./html/parseHTML');


const MESSAGE_REACT_FULL_TEMPLATE = 'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';

// module.exports = {

//   MESSAGE_REACT_FULL_TEMPLATE,
//   MESSAGE_REACT_CONTENT,
// };


module.exports = {
    reactComponent,
    reactComponentReplace,
    writeReactComponent
};