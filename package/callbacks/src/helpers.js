import os from 'os';

import { mapKeys } from 'lodash';

import layouts from 'atherdon-newsletter-js-layouts';
import reactLayouts from 'atherdon-newsletter-react';



const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';


function getWrapper(name, config){

  let { layouts, folder } = config;

  let wrapper = layouts[folder][name];
  return wrapper;
}

// here we can have a problem, because we're passing more information into a config that it was before

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

// config.folder
// config.type aka plain or react
function relieve(name, config){

    
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

function _NewReplace(name, config){
  // TODO later we can get rid of it completely.
  // right now it's only for back campatibility purposes
  // let configCopy = Object.assign(config, { 'layouts':layouts, 'folder': folder })
  
  // let wrapper = getWrapper(name, configCopy)

  // let updatedString = loopForWrapper(configCopy, wrapper);
  // return updatedString;

}


function replaceWrapper(name, config, folder = 'typography') {

  // TODO later we can get rid of it completely.
  // right now it's only for back campatibility purposes
  let configCopy = Object.assign(config, { 'layouts':layouts, 'folder': folder })


  // this part will be updated very soon
  let wrapper = getWrapper(name, configCopy)
  // layouts[folder][name];
  
  let updatedString = loopForWrapper(configCopy, wrapper);
  return updatedString;
}

function replaceReactWrapper(name, config, folder = 'typography') {
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);

  let configCopy = Object.assign(config, { 'layouts':reactLayouts, 'folder': folder })
 
  let wrapper = getWrapper(name, configCopy)
  
  let updatedString = loopForWrapper(config, wrapper);
  return updatedString;
}


export {
  newLine,

  replaceReactWrapper,
  replaceWrapper,

  relieve
};
