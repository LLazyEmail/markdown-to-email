//----------------
// import { html } from 'lit-html'

// import body from '../../templates/PlainJSOuterTemplate/layouts/body';
// import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';

import {
  getWrapper,
  generateNewString,
  _loopForWrapper,
} from '../../callbacks/helpers';

import { inspector } from '../error-handle';

import { mainObject } from '../replace-class/';
// import replace from '../replace-class/index';
// console.log(replace.mainObject);

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
  
  if(debug){
    console.log(mainObject[name]);

    console.log(mainObject[name].literal)
  }
  
  inspectorCheck(mainObject[name]);

  try {
    
    // const replaced = commonReplace(config);
    // const replaced = replaceHeader(config);
    // return newLine + replaced;

    if(mainObject[name].literal){
      return { literal: mainObject[name].literal };
    }
    
  } catch (error) {
    catch_error_trace_output(error);
  }

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

  // console.log(config);

  const configCopy = Object.assign(
    config, 
    WR3_getWrapper(config.name)
  );

  const newString = WR3_generateNewString(configCopy);
    console.log(newString);
    
  return newString;
};

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


  inspector2(config.params)

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));


  try {

    const newString = WR3_generateNewString(configCopy);
    
    return newString;

  } catch (error) { catch_error_trace_output(error); }

};




//--------------------------
//--------------------------
// TODO move to domain/error-handle
const inspectorCheck = (string) => {
  if (!inspector(string)) {
    throw new Error('replace wrapper 3.0 is blank');
  }
};

const inspector2 = (params) => {
  if (!inspector(params)){
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
  // repSponsor,
  // replacerParagraph,
  replaceLink,
  replaceHeader,
  // replaceStrong,
  commonReplace,
  // replaceUl,
  WR3_generateNewString,
  WR3_getWrapper,
};
