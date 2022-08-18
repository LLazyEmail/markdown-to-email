//----------------
// import { html } from 'lit-html'

// import body from '../../templates/PlainJSOuterTemplate/layouts/body';
// import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';

import {
  // getWrapper,
  // generateNewString,
  _loopForWrapper,
} from '../../callbacks/helpers';

import { inspector, catchErrorTraceOutput } from '../error-handle';

// import { mainObject as mainObjectHtml } from '../replace-class';
// import { mainObject as mainObjectReact } from '../react';

// import replace from '../replace-class/index';
// console.log(replace.mainObject);

// import CallbackFactory from '../callbacks-factory';

const ERROR_REPLACER = `no params was passed`;

// const WR3_Template(params){
//     const  { src, href, content, wrapper } = params;
//     return html(wrapper);
// }

//--------------------------
//--------------------------
// TODO move to domain/error-handle
const inspectorCheck = (string) => {
  if (!inspector(string)) {
    throw new Error('replace wrapper 3.0 is blank');
  }
};

const inspector2 = (params) => {
  if (!inspector(params)) {
    throw new Error(ERROR_REPLACER);
  }
};

function WR3_generateNewString(config) {
  inspector(config.params);

  const updatedString = _loopForWrapper(config.params, config.literal);

  // if (config.debug) console.log(config);

  // if (config.debug) console.log(updatedString);

  inspectorCheck(updatedString);

  return updatedString;
}

const WR3_getWrapper = (name, mainObjectCCL) => {
  inspectorCheck(mainObjectCCL[name]);

  try {
    if (mainObjectCCL[name].literal) {
      return { literal: mainObjectCCL[name].literal };
    }
  } catch (error) {
    catchErrorTraceOutput(error);
  }

  return false;
};

//--------------------------
//--------------------------
// const getParsedSubListReplace = (config) => {
//   console.log(WR3_getWrapper(config.name));

//   // const configCopy = Object.assign(config, WR3_getWrapper(config.name));

//   // const newString = WR3_generateNewString(configCopy);

//   // return newString;
// };

const commonReplace = (config) => {
  inspector2(config.params);

  if (!config.configurationMap) {
    throw new Error('Configuratin map is not passed from callbacks');
  }

  const configCopy = Object.assign(
    config,
    WR3_getWrapper(config.name, config.configurationMap),
  );

  try {
    const newString = WR3_generateNewString(configCopy);
    return newString;
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return false;
};

export {
  // replaceLink,
  commonReplace,
  // replaceUl,
};
