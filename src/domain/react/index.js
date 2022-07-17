import mainObject from './pre-replace-object';
import configureReplacer from './configuration';

function prepOurCallback(callbackName, debug = false) {
    if (!callbackName) {
      throw new Error(`name of ${callbackName} is undefined or empty`);
    }
  
    const settings = mainObject[callbackName];
    // console.log(settings)
  
    if (debug) {
      //--------------
      if (!settings.literal) {
        console.log(callbackName, settings.constant);
        console.log('-----------------');
      }
      //---------------
    }
  
    return settings;
  }

export { mainObject, configureReplacer, prepOurCallback };