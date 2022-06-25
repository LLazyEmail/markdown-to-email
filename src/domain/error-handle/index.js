//---------------------

something like 


const ERROR_REGEX_CONSTANT = (value) => `something wrong with RegEx constant ${value}`;
const ERROR_REPLACER_FUNCTION = (value) =>  `something wrong with replacer function ${value}`;


function extractOptions(converter, key) {
  if (!converter.key) throw new Error('no options for this converter');
  return converter.key;
}


// TODO WE NEED MAKE IT WORK
function checkerr(variable = false) {

  // console.log( typeof element.replacer === 'undefined' );
  // console.log( element.replacer === null );

  if (typeof variable === 'undefined' || variable === null) {
    // variable is undefined or null
    return false;
  }
  return true;
}


// later we'll extend this method
// object assing will help us.
// const objectBuilder = (constant, replacer) => {constant, replacer}
function objectBuilder(constant, replacer, literal = false){

  // TODO add typeof for checking replacer as a function
  // console.log( typeof element.replacer === 'undefined' );
  if(!constant) throw new Error(ERROR_REGEX_CONSTANT)
  if(!replacer) throw new Error(ERROR_REPLACER_FUNCTION)


  
  // i want to replace it later with components
  return { constant, replacer, literal };
}