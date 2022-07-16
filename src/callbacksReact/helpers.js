import os from 'os';
// const { forEach } = require('lodash');

import reactLayouts from '../templates/NewsletterReactTemplate';

console.log(reactLayouts);

const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';

// function replaceReactWrapper(wrapperName, config, folder = 'typography') {
//   // console.log(reactLayouts.Typography.strong);
//   // console.log("name", config);

//   // this part will be updated very soon
//   let wrapper = reactLayouts[folder][wrapperName];

//   // @TODO replace with lodash
//   Object.keys(config).forEach((name) => {
//     wrapper = wrapper.replace(new RegExp(`{${name}}`, 'g'), config[name]);
//   });

//   return wrapper;
// }

// function replaceReactWrapper(name, config, folder = 'typography') {
//   // console.log(reactLayouts.Typography.strong);
//   // console.log("name", config);

//   let configCopy = Object.assign(config, {
//     'layouts': reactLayouts,
//     'folder': folder
//   })

//   // console.log(configCopy);

//   return generateNewString(name, configCopy);
// }

export {
  newLine,
  // replaceWrapper,
  // replaceReactWrapper,
};
