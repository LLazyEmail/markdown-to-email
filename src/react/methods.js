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
