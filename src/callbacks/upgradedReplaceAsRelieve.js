
//   // newLine,
import { replaceWrapper } from '';

import { generateNewString } from '';

function tracingVariables = () => {
  //   try {

  //       if (!regexp) throw new Error('regular expression is blank');
  //       if (!callback) throw new Error('no callback presented');

//       should we do something here?
  
  //       // ... add more here later

  //   } catch(err) {
  //       // we need to test how it actually work
  //       var caller_line = err.stack.split("\n")[4];
  //       var index = caller_line.indexOf("at ");
  //       var clean = caller_line.slice(index+2, caller_line.length);

  //       throw err;
  //   }
}


class Overhaul { 

  constructor() {

    
    this.replaceMarkdownNew = (key) => {

    }


/* function replaceMarkdownNew(key) {
  const { regexp, callback } = extractOptions(converter, key);

  // const {regexp, callback} = options;

} */



  this.extractOptions = (converter, key) => {
    if (!converter.key) throw new Error('no options for this converter');
    return converter.key;
  }



  /* eslint-disable */
  // basically, it's a copy of replaceWrapper functions

  // config.folder
  // config.type aka plain or react
  this.relieve = (name, config)  => {

    const folder = config.folder || 'typography';


  
    // we need to have an if, for passing plain or react stuff
    // let wrapper = getWrapper(layouts, folder, name)
  
    switch (config.type) {
      case 'plain':
        // let wrapper = getWrapper(layouts, folder, name)
        replaceWrapper(name, config, folder);
        break;
  
      case 'react':
        // let wrapper = getWrapper(reactLayouts, folder, name)
        replaceReactWrapper(name, config, folder);
        break;
  
      default:
        break;
    }

  }
  
  this.replaceReactWrapper = (name, config, folder = 'typography'){
    //   // console.log(reactLayouts.Typography.strong);
    //   // console.log("name", config);

    //   let configCopy = Object.assign(config, {
    //     'layouts': reactLayouts,
    //     'folder': folder
    //   })

    //   // console.log(configCopy);

    //   return generateNewString(name, configCopy);
  
  }


}
}




//-----------------

//-----------------
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


//-----------------
// function _NewReplace(name, config){
//  // TODO later we can get rid of it completely.
//  // right now it's only for back campatibility purposes
//  // let configCopy = Object.assign(config, { 'layouts':layouts, 'folder': folder })

//  // let wrapper = getWrapper(name, configCopy)

//  // let updatedString = loopForWrapper(configCopy, wrapper);
//  // return updatedString;
//  return generateNewString(name, config);
// }

//-----------------

// moving into separated callbacks
// function replaceWrapper(name, config, folder = 'typography') {

//   // TODO later we can get rid of it completely.
//   // right now it's only for back campatibility purposes
//   let configCopy = Object.assign(config, {
//       'layouts': layouts,
//       'folder': folder
//     })

//   // console.log(configCopy);

//   return generateNewString(name, configCopy);
// }

const reactWrapper = () => {
 //   // console.log(reactLayouts.Typography.strong);
    //   // console.log("name", config);

    //   let configCopy = Object.assign(config, {
    //     'layouts': reactLayouts,
    //     'folder': folder
    //   })
  
  
//   return ....
}


function EmployeeDetails() {
  
  var name: "Mayank";
  var age = 30;
  var designation = "Developer",
  var salary = 10000;

  var calculateBonus = function(amount) {
    salary = salary + amount;
  }

  return {
    name,
    age,
    designation: designation,
    calculateBonus: calculateBonus
  }
}

var newEmployee = EmployeeDetails()
