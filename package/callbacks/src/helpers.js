import os from 'os';
import { mapKeys } from 'lodash';



//const platform = os.platform();
//const newLine = platform === 'win32' ? '\r\n' : '\n';




function getWrapper(name, config){

  
  
  let { layouts, folder } = config;

  console.log(layouts);
  
  let wrapper = layouts[folder][name];
  console.log(wrapper);
  
  return wrapper;
}


// here we can have a problem, because we're passing more information into a config that it was before

function loopForWrapper(config, wrapper){

   console.log(config);

   console.log(wrapper);
  
  
  
  
  
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


function generateNewString(name, config){
  let wrapper = getWrapper(name, config)
  
  // stopping it here....
  let updatedString = loopForWrapper(config, wrapper);

  return updatedString;
}
//-----------------



// moving into separated callbacks
// function replaceWrapper(name, config, folder = 'typography') {

//   // TODO later we can get rid of it completely.
//   // right now it's only for back campatibility purposes
//   let configCopy = Object.assign(config, { 
//       'layouts': layouts, 
//       'folder': folder 
//     })

//   // console.log(configCopy);

//   return generateNewString(name, configCopy);
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



//function _NewReplace(name, config){
//  // TODO later we can get rid of it completely.
//  // right now it's only for back campatibility purposes
//  // let configCopy = Object.assign(config, { 'layouts':layouts, 'folder': folder })
  
//  // let wrapper = getWrapper(name, configCopy)

//  // let updatedString = loopForWrapper(configCopy, wrapper);
//  // return updatedString;
//  return generateNewString(name, config);
//}


export {
  //newLine,


  generateNewString,
  // replaceReactWrapper,
  // replaceWrapper,

  relieve,


  _NewReplace,

  getWrapper, generateNewString

};
