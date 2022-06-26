// import os from 'os';
// import { mapKeys } from 'lodash';

// const platform = os.platform();
// const newLine = platform === 'win32' ? '\r\n' : '\n';
import { catch_error_trace_output } from '../domain/error-handle/index'


function getWrapper(name, config) {


  const { layouts, folder } = config;

  // console.log(layouts);

  try {
    // nonExistentFunction();

    const wrapper = layouts[folder][name];
    return wrapper;

  } catch (error) {
    
    catch_error_trace_output(error);
    
  }


  
  // console.log(wrapper);

  


// here we can have a problem, because we're passing more information into a config that it was before

function loopForWrapper(config, wrapper) {
  // console.log(config);

  // console.log(wrapper);

  // _.mapKeys(config, function(value, key) {
  //   return key + value;
  // });

  // TODO replace with lodash
  Object.keys(config).forEach((name) => {
    const currentConfig = config[name];


    const regularExpression = new RegExp(`{${name}}`, 'g');

    wrapper = wrapper.replace(regularExpression, currentConfig);

  });

  return wrapper;
}

function generateNewString(name, config) {
  const wrapper = getWrapper(name, config);

  // stopping it here....
  const updatedString = loopForWrapper(config, wrapper);

  return updatedString;
}

//-----------------

export {  
  generateNewString,
  getWrapper,
};
