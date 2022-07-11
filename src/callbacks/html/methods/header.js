import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';

import { replaceHeader, commonReplace } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';

// import CallbackFactory from '../../../domain/callbacks-factory';

// TODO fix issue related to text variable
function _header(text, chars, content) {

  // const factory = CallbackFactory.create();


  const params = {
    content: content.trim(),
  };

  const titleTypes = ['title', 'subtitle', 'heading'];

  const name = titleTypes[chars.length - 1];

  // console.log(name);
  // console.log('-----------');

  const config = {
    params,
    name,
    
    debug: true,
  };

  // NOT FINISHED
  // console.log(config);

  // switch (name) {
  //   case 'subtitle':
  //     subtitleCase(config);
  //     break;
    
  //   case 'title':
  //     titleCase(config);
  //     break;
  //   default:
  //     headingCase(config);
      
  // }


  const replaced = commonReplace(config);
return newLine + replaced;


}


// function _title(text, chars, content){

// }

const headingCase = (config) => {
  try {
    // console.log('123');
    // const replaced = commonReplace(config);
    const replaced = commonReplace(config);
    return replaced;
    // return newLine + replaced;
    
  } catch (error) {
    catch_error_trace_output(error);
  }
}

const titleCase = (config) => {

  const replaced = commonReplace(config);
  // console.log(replaced);
  return replaced;
  // return newLine + replaced;  

}

const subtitleCase = (config) => {

  const replaced = commonReplace(config);
  return replaced;
  // console.log(replaced);
  // return newLine + replaced;  
  
  // try {
  //   // console.log('123');
  //   // const replaced = commonReplace(config);
  //   const replaced = replaceHeader(config);
  //   // console.log(replaced);
  //   return newLine + replaced;
    
  // } catch (error) {
  //   catch_error_trace_output(error);
  // }

}



export default _header;
