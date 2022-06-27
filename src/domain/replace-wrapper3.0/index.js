//----------------
//----------- propose to move repSponsor here, in order to avoid confusion

// import { html } from 'lit-html'

import body from '../../templates/PlainJSOuterTemplate/layouts/body';
import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';

import { getWrapper, generateNewString, _loopForWrapper } from '../../callbacks/helpers'

import { inspector } from '../error-handle';

import mainObj from '../replace-markdown/pre-replace-objects';

// const WR3_Template(params){
//     const  {src, href, content, wrapper}=params; 
//     return html(wrapper);
// }

const WR3_getWrapper = (name) => {
    return { literal: mainObj[name]['literal'] }
}

function repSponsor(config){

    const { debug } = config || false;


    const configCopy = Object.assign(
        config, 
        WR3_getWrapper(config.name)
    );
  
  
  
  
    if(debug) console.log(configCopy);
  
    let newString = WR3_generateNewString(configCopy);
  
    if(debug) console.log(newString);
  
    // if (!inspector(newString)) {
    //   throw new Error('replace wrapper 3.0 is blank');
    // }   
    inspectorCheck(newString);
    
    return newString;
  
  
}
//-------------------
const replacerParagraph = (config) => {

  const { debug } = config || false;

  const configCopy = Object.assign(
    config, 
    WR3_getWrapper(config.name)
  );

  if(debug) console.log(configCopy);

  let newString = WR3_generateNewString(configCopy);
  
  if(debug) console.log(newString);
  
  // if (!inspector(newString)) {
  //   throw new Error('replace wrapper 3.0 is blank');
  // }   
  inspectorCheck(newString);
    
  return newString;



}


const inspectorCheck = (string) => {
  if (!inspector(string)) {
    throw new Error('replace wrapper 3.0 is blank');
  } 
}



function WR3_generateNewString(config){

    // const wrapper = getWrapper(name, config);
// console.log(config.literal)
    // stopping it here....
    const updatedString = _loopForWrapper(config.params, config.literal);
  
    return updatedString;
}

  export { repSponsor, replacerParagraph }