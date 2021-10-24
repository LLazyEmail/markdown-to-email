import { map } from 'lodash'

function callbacksFactory(name = "Hello", regEx = "World", replace = "", isError = false) {
  return {
    log: () => `${regEx}, ${name}`,
    
    get: () => {name:name, regEx:regEx, replace:replace(), isError:false},
    
    combine: () => {return {name:name, regEx:regEx, replace:replace()}},
    
    // I want to have a better way to report errors, so each callback can report an issue, so we can track it better 
    isError: () => 'errror is here'
  }
}

function callbacksArray(names, replaceArr){
  const data = map(replaceArr, {
    
      name, regEx, replace
      
      let element = callcabacksFactory(name, regEx, replace);
      element.log();
    
  })
  
}


