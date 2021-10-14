import os from 'os';

import { mapKeys } from 'lodash';

import layouts from 'atherdon-newsletter-js-layouts';
import reactLayouts from 'atherdon-newsletter-react';



const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';

function getWrapper(layouts, folder, name){
  let wrapper = layouts[folder][name];
  return wrapper;
}

function loopForWrapper(config, wrapper){

  console.log(config);

  // _.mapKeys(config, function(value, key) {
  //   return key + value;
  // });


  // @TODO replace with lodash
  Object.keys(config).forEach((name) => {

    var currentConfig = config[name];
    var regularExpression = new RegExp(`{${name}}`, 'g');

    wrapper = wrapper.replace(
      regularExpression, 
      currentConfig
    );
  });

  return wrapper;
}

// basically, it's a copy of replaceWrapper functions
function relieve(name, config){

//     config.folder
// config.type aka plain or react
  
let folder = config.folder || 'typography';

// we need to have an if, for passing plain or react stuff
// let wrapper = getWrapper(layouts, folder, name)
  
  switch(config.type){
    case 'plain':
      // let wrapper = getWrapper(layouts, folder, name)
      replaceWrapper(name, config, folder);
      break;
      
    case 'react'
      // let wrapper = getWrapper(reactLayouts, folder, name)
      replaceReactWrapper(name, config, folder);
      break;
      
    default:
      break;
  }
  
}



function replaceWrapper(name, config, folder = 'typography') {
  // this part will be updated very soon
  let wrapper = getWrapper(layouts, folder, name)
  // layouts[folder][name];
  
  let updatedString = loopForWrapper(config, wrapper);
  return updatedString;
}

function replaceReactWrapper(name, config, folder = 'typography') {
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);

  // this part will be updated very soon  
  let wrapper = getWrapper(reactLayouts, folder, name)
  
  let updatedString = loopForWrapper(config, wrapper);
  return updatedString;
}


export {
  newLine,

  replaceReactWrapper,
  replaceWrapper
};
