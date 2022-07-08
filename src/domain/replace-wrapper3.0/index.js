//----------------
// ----------- propose to move repSponsor here, in order to avoid confusion

// import { html } from 'lit-html'

import body from '../../templates/PlainJSOuterTemplate/layouts/body';
import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';

import {
  getWrapper,
  generateNewString,
  _loopForWrapper,
} from '../../callbacks/helpers';

import { inspector } from '../error-handle';

import mainObj from '../replace-markdown/pre-replace-objects';

import CallbackFactory from '../callbacks-factory';

import { catch_error_trace_output } from '../error-handle';

const ERROR_REPLACER = `no params was passed`;

// const WR3_Template(params){
//     const  { src, href, content, wrapper } = params;
//     return html(wrapper);
// }

const WR3_getWrapper = (name, debug = false) => {

  if (debug){
    console.log(name);
  }
  
  // console.log(mainObj[name].literal)

  try {
    
    // const replaced = commonReplace(config);
    // const replaced = replaceHeader(config);
    // return newLine + replaced;

    if(mainObj[name].literal){
      return { literal: mainObj[name].literal };
    }
    
  } catch (error) {
    catch_error_trace_output(error);
  }

};
//--------------------------
//--------------------------
function repSponsor(config) {
  // const { debug } = config || false;


  return commonReplace(config);
}
//-------------------
//--------------------------
const replacerParagraph = (config) => {

  return commonReplace(config);
};
//--------------------------
//--------------------------
const replaceLink = (config) => {
  // const { debug } = config || false;

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  // if(debug) console.log(configCopy);

  const newString = WR3_generateNewString(configCopy);

  // if(debug) console.log(newString);
  // inspectorCheck(newString);

  return newString;
};
//--------------------------
//--------------------------
const replaceHeader = (config) => {
  // const { debug } = config || false;

  inspector2(config.params)

  // console.log('123');

  const configCopy = Object.assign(
    config, 
    WR3_getWrapper(config.name, true)
  );

  const newString = WR3_generateNewString(configCopy);

  return newString;
};
//--------------------------
//--------------------------
const replaceStrong = (config) => {
  // const { debug } = config || false;

  return commonReplace(config);
};
//--------------------------
//--------------------------
const replaceUl = (config) => {

  return commonReplace(config);

}

//--------------------------
//--------------------------
const getParsedSubListReplace = (config) => {

  console.log(WR3_getWrapper(config.name));


  // const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  // const newString = WR3_generateNewString(configCopy);

  // return newString;
}

//--------------------------
//--------------------------
const commonReplace = (config) => {
  // const { debug } = config || false;

  // if(!inspector(config.params)) throw new Error(ERROR_REPLACER);
  inspector2(config.params)

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));


  try {

    const newString = WR3_generateNewString(configCopy);

    return newString;

  } catch (error) { catch_error_trace_output(error); }

};




//--------------------------
//--------------------------
const inspectorCheck = (string) => {
  if (!inspector(string)) {
    throw new Error('replace wrapper 3.0 is blank');
  }
};

const inspector2 = (params) => {
  if (!inspector(string)){
    throw new Error(ERROR_REPLACER);
  }
}

function WR3_generateNewString(config) {

  inspector(config.params);

  const updatedString = _loopForWrapper(config.params, config.literal);

  if (config.debug) console.log(config);

  if (config.debug) console.log(updatedString);

  inspectorCheck(updatedString);

  return updatedString;
}

export {
  repSponsor,
  replacerParagraph,
  replaceLink,
  replaceHeader,
  replaceStrong,
  commonReplace,
  replaceUl,
  WR3_generateNewString,
  WR3_getWrapper,
};
