import { catch_error_trace_output } from '../domain/error-handle/index';

// import os from 'os';
import { mapKeys } from 'lodash';

// const platform = os.platform();
// const newLine = platform === 'win32' ? '\r\n' : '\n';

function getWrapper(name, config) {


  const { layouts, folder } = config;

  // console.log(layouts);

  try {


    const wrapper = layouts[folder][name];
    return wrapper;

  } catch (error) { catch_error_trace_output(error); }

}

  
  // console.log(wrapper);

  


// here we can have a problem, because we're passing more information into a config that it was before

function _loopForWrapper(config, literal) {

  try {

    mapKeys(config, function(value, key) {
      
      // console.log(key);
      // console.log(value);
    

      const regularExpression = new RegExp(`{${key}}`, 'g');
      // console.log(regularExpression)
      
          
      literal = literal.replace(regularExpression, value);
      

    });

    return literal;

  } catch (error){
    catch_error_trace_output(error)
  }

}

function generateNewString(name, config) {
  const wrapper = getWrapper(name, config);

  // stopping it here....
  const updatedString = _loopForWrapper(config, wrapper);

  return updatedString;
}

//-----------------

export {  
  generateNewString,
  getWrapper,

  _loopForWrapper
};
