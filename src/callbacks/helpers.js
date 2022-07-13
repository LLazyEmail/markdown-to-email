import { mapKeys } from 'lodash';
import { catchErrorTraceOutput } from '../domain/error-handle/index';

// import os from 'os';

// const platform = os.platform();
// const newLine = platform === 'win32' ? '\r\n' : '\n';

// I think this method will be deleted or we'll update our
// current version like W3_getWrapper
function getWrapper(name, config) {
  const { layouts, folder } = config;

  // console.log(layouts);

  try {
    const wrapper = layouts[folder][name];
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return wrapper;
}

// console.log(wrapper);

// here we can have a problem, because we're passing more information into a config that it was before

function _loopForWrapper(config, literal) {
  try {
    mapKeys(config, function (value, key) {
      // console.log(key);
      // console.log(value);

      const regularExpression = new RegExp(`{${key}}`, 'g');
      // console.log(regularExpression)

      literal = literal.replace(regularExpression, value);
    });

    return literal;
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return false;
}

function generateNewString(name, config) {
  const wrapper = getWrapper(name, config);

  // stopping it here....
  const updatedString = _loopForWrapper(config, wrapper);

  return updatedString;
}

//-----------------

export { generateNewString, _loopForWrapper };
