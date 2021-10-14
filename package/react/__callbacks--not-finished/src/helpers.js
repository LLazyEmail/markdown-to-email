import os from 'os';
// const { forEach } = require('lodash');

import layouts from 'atherdon-newsletter-js-layouts';



import reactLayouts from 'atherdon-newsletter-react';



const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';





function replaceReactWrapper(wrapperName, config, folder = 'typography') {
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);

  // this part will be updated very soon
  let wrapper = reactLayouts[folder][wrapperName];
  

  // config.map((i,v) => {
  //  
  // });
  

  // @TODO replace with lodash
  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, 'g'), config[name]);
  });

  return wrapper;
}


export {
  newLine,

  // replaceWrapper,
  replaceReactWrapper
};
