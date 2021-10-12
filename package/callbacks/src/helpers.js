import os from 'os';
// const { mapKeys } = require('lodash');

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

function replaceWrapper(wrapperName, config, folder = 'typography') {
  // this part will be updated very soon
  let wrapper = getWrapper(layouts, folder, wrapperName)
  // layouts[folder][wrapperName];
  
  let updatedString = loopForWrapper(config, wrapper);
  return updatedString;
}

function replaceReactWrapper(wrapperName, config, folder = 'typography') {
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);

  // this part will be updated very soon  
  let wrapper = getWrapper(reactLayouts, folder, wrapperName)
  
  let updatedString = loopForWrapper(config, wrapper);
  return updatedString;
}


export {
  newLine,

  replaceReactWrapper,
  replaceWrapper
};
