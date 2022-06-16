// import {generateNewString} from '';

// import body from '../../templates/OuterTemplate/layouts/body';
// import misc from '../../templates/OuterTemplate/layouts/misc';
// import NewPlainJSLayouts from '../../templates/OuterTemplate';

// console.log(layouts);

// console.log(NewPlainJSLayouts);
// TODO needs to be checked and replace on correct
const newLine = '\n';

function checkerr(variable = false) {

  // console.log( typeof element.replacer === 'undefined' );
  // console.log( element.replacer === null );

  if (typeof variable === 'undefined' || variable === null) {
    // variable is undefined or null
    return false;
  }
  return true;
}

// eslint-disable-next-line no-unused-vars
function replaceWrapper(name, config, folder = 'typography') {

  
  console.log(name, config);



  
  // TODO later we can get rid of it completely.
  // right now it's only for back campatibility purposes



  // const configCopy = Object.assign(config, {
  //   // TODO I am not sure is it correct structure
  //   layouts: { body, misc },
  //   folder,
  // });
  // console.log(configCopy);

  
  // let newString = generateNewString(name, configCopy);
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
  
  // if(checkerr()){
  //   throw new Error
  // }

}

export {
  newLine,
  replaceWrapper,
  // replaceReactWrapper
};
