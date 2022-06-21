// TODO remove unused `text` argument


function link(text, title, href) {
    const config = {
      content: title.trim(),
      href: href.trim(),
    };
  
  
  
  
  
    const replaced = replaceWrapper('link', config);
  

    


    return replaced;
  }

  export {
    link
  }