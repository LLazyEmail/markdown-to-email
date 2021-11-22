// import {generateNewString} from '';

import layouts from 'atherdon-newsletter-js-layouts';


console.log(layouts);
function replaceWrapper(name, config, folder = 'typography') {

    // TODO later we can get rid of it completely.
    // right now it's only for back campatibility purposes
    let configCopy = Object.assign(config, { 
        'layouts': layouts, 
        'folder': folder 
      })
  
    // console.log(configCopy);
  
    return generateNewString(name, configCopy);
  }

  export {
    newLine,
  
    replaceWrapper,
    // replaceReactWrapper
  };
  