import { mapKeys } from 'lodash';
import { catchErrorTraceOutput } from '../domain/error-handle/index';

// I think this method will be deleted or we'll update our
// current version like W3_getWrapper
function getWrapper(name, config) {
  const { layouts, folder } = config;

  // console.log(layouts);

  try {
    const wrapper = layouts[folder][name];
    return wrapper;
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return false;
}

// console.log(wrapper);

// here we can have a problem, because we're passing more information into a config that it was before

const _loopForWrapper = (config, component) => {
  try {
    return component(config);
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return false;
};

function generateNewString(name, config) {
  const wrapper = getWrapper(name, config);

  // stopping it here....
  const updatedString = _loopForWrapper(config, wrapper);

  return updatedString;
}

export { generateNewString, _loopForWrapper };
