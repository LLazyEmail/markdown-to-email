import { generateNewString } from '../helpers';

import body from '../../templates/OuterTemplate/layouts/body';
import misc from '../../templates/OuterTemplate/layouts/misc';


// import NewPlainJSLayouts from '../../templates/OuterTemplate';

// console.log(layouts);

// console.log(NewPlainJSLayouts);
// TODO needs to be checked and replace on correct
const newLine = '\n';

function beforeBeginingNewLine(string){
  return newLine + string;
}

function beforeEnd(string){
  return string + newLine;
}

// function checkerr(variable = false) {

//   // console.log( typeof element.replacer === 'undefined' );
//   // console.log( element.replacer === null );

//   if (typeof variable === 'undefined' || variable === null) {
//     // variable is undefined or null
//     return false;
//   }
//   return true;
// }

// eslint-disable-next-line no-unused-vars
function replaceWrapper(name, config, folder = 'typography', debug = true) {

  
  // console.log(config);



  
  // TODO later we can get rid of it completely.
  // right now it's only for back campatibility purposes


  //   // TODO I am not sure is it correct structure
  const configCopy = Object.assign(config, {
    layouts: { body, misc },
    folder,
  });

  // if(debug)  console.log(configCopy);


  let newString = generateNewString(name, configCopy);

  if(debug) console.log(newString);
  // return newString;
  // return generateNewString(name, configCopy);



  if (typeof variable === 'undefined' || variable === null) {
    // variable is undefined or null
    // return false;
    throw new Error('replaceWrapper is blank');
  }


  // if (!checkerr()) {
  //   throw new Error('replaceWrapper is blank');
  // }
  

}


// I plan to add more replaceWrappers for now, in order to simplify our processes a little bit.
// as we redoing this thing again and again, it's probably a better way to make it work as we wishing for


export {
  newLine,
  replaceWrapper,
  // replaceReactWrapper
};
