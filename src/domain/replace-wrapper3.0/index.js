//----------------
//----------- propose to move repSponsor here, in order to avoid confusion

// import { html } from 'lit-html'

import body from '../../templates/PlainJSOuterTemplate/layouts/body';
import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';

import { getWrapper, generateNewString, _loopForWrapper } from '../../callbacks/helpers'



import mainObj from '../replace-markdown/pre-replace-objects';

// const WR3_Template(params){
//     const  {src, href, content, wrapper}=params; 
//     return html(wrapper);
// }

const WR3_getWrapper = (name) => {
    return { wrapper: mainObj[name] }
}

function repSponsor(config){

    // console.log(config)
    // name, config, folder = 'typography', debug = true
  
  
    //   // TODO I am not sure is it correct structure
    const configCopy = Object.assign(config, {
    //   layouts: { 
    //     body, misc 
    // },
    // wrapper: mainObj[config.name]
      // folder,
  
      
    }, WR3_getWrapper(config.name));
  
  
  
  
    // if(config.debug)  console.log(configCopy);
  
    // console.log(mainObj[configCopy.name])
  
    // wrapper: getWrapper(config.name, config)
  
  
    let newString = WR3_generateNewString(configCopy);
  
    if(debug) console.log(newString);
  
  
    
    // return newString;
  
  
    // return generateNewString(name, configCopy);
  
  
  
  
  
    // if (typeof variable === 'undefined' || variable === null) {
    //   // variable is undefined or null
    //   // return false;
    //   throw new Error('replaceWrapper is blank');
    // }
  
  
    // if (!checkerr()) {
    //   throw new Error('replaceWrapper is blank');
    // }
    
  
  }

function WR3_generateNewString(config){

    // const wrapper = getWrapper(name, config);

    // stopping it here....
    const updatedString = loopForWrapper(config.params, config.wrapper);
  
    return updatedString;
}

  export {repSponsor}