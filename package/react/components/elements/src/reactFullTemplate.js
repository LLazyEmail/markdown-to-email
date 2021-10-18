import head from './head';
import getBody from './body';

function reactFullTemplate(parsedContent) {
  return `
  import React from "react";

  const Content = () => {
    return (
      <Template>
        ${head}
        ${getBody(parsedContent)}
      </Template>
    );
  };
  
  export default Content;
  
  `;
}

export { reactFullTemplate };
