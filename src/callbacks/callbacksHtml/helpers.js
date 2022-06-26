import { generateNewString } from '../helpers';


import body from '../../templates/PlainJSOuterTemplate/layouts/body';
import misc from '../../templates/PlainJSOuterTemplate/layouts/misc';


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







// eslint-disable-next-line no-unused-vars
function replaceWrapper2(params) {
  

  const { name, config, folder, debug } = params;

  if(!folder) folder = 'typography';
  if(!debug) debug = true;


}


function replaceContent(){

}

function replaceOuterTemplate(){

}


function repSponsor(name, config, folder = 'typography', debug = true){


  
  //   // TODO I am not sure is it correct structure
  const configCopy = Object.assign(config, {
    layouts: { body, misc },
    folder,
  });

  if(debug)  console.log(configCopy);


  let newString = generateNewString(name, configCopy);

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

// TODO each time we are passing a huge variable with layouts for each wrapper.
// instead we can do it differently
// while we still using this method - we will keep it, but soon or later we'll delete it completely

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

  if(debug)  console.log(configCopy);


  let newString = generateNewString(name, configCopy);

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


// I plan to add more replaceWrappers for now, in order to simplify our processes a little bit.
// as we redoing this thing again and again, it's probably a better way to make it work as we wishing for


export {
  newLine,
  beforeBeginingNewLine,
  beforeEnd,
  replaceWrapper,

  
  replaceWrapper2,
  repSponsor,

  replaceContent,
  replaceOuterTemplate
  // replaceReactWrapper
};
