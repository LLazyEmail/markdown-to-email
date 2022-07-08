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

const ERROR_REPLACER = ``;

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

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  const newString = WR3_generateNewString(configCopy);

  return newString;
}
//-------------------
//--------------------------
const replacerParagraph = (config) => {
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


  // TODO this can be moved into a separate method.
  // problably at some point we'll have only one replacer method
  // but at this point we cant have it, so we better to optimize things.
  if(!inspector(config.params)) throw new Error('no params was passed');

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

  if(!inspector(config.params)) throw new Error('no params was passed');

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  const newString = WR3_generateNewString(configCopy);

  return newString;
};
//--------------------------
//--------------------------
const replaceUl = (config) => {

  if(!inspector(config.params)) throw new Error('no params was passed');

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  const newString = WR3_generateNewString(configCopy);

  return newString;

}

//--------------------------
//--------------------------
const getParsedSubListReplace = (config) => {

  console.log(WR3_getWrapper(config.name));

}

//--------------------------
//--------------------------
const commonReplace = (config) => {
  // const { debug } = config || false;

  if(!inspector(config.params)) throw new Error('no params was passed');

  const configCopy = Object.assign(config, WR3_getWrapper(config.name));

  const newString = WR3_generateNewString(configCopy);

  return newString;
};

//--------------------------
//--------------------------
const inspectorCheck = (string) => {
  if (!inspector(string)) {
    throw new Error('replace wrapper 3.0 is blank');
  }
};

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
