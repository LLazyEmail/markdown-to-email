// TODO make sense to the text variable
function strong(text, doubleAsterix, content, asterix) {
    const config = {
      content: `${content + asterix}`,
    };
  
  
  
  
    
    const replaced = replaceWrapper('strong', config);
  
    return replaced;
  }


  // 

  export {
    strong
  }