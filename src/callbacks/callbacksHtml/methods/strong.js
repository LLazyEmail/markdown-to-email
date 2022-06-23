// TODO make sense to the text variable
// probably Vadim knows what is doing on here,
// I think he was the person that did all these funcitons.

function _strong(text, doubleAsterix, content, asterix) {
    
  
  const config = {
      content: `${content + asterix}`,
    };
  
  
  
  
    
    const replaced = replaceWrapper(
      'strong', config
      );
  
    return replaced;
  }

  export default _strong;