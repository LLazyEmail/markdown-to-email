import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';

import { replaceHeader } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'

// TODO fix issue related to text variable
function _header(text, chars, content) {
  
  
  
    const config = {
      content: content.trim(),

      debug: true
    };
    
  console.log(config);

    const titleType = ['title', 'subtitle', 'heading'];
  
    const variabl = titleType[chars.length - 1];
    // console.log(variabl);
    
    
    // const replaced = replaceWrapper(titleType[chars.length - 1], config);
  
    try {

        const replaced = replaceHeader(config);
      
        return newLine + replaced;
    
      } catch (error) { catch_error_trace_output(error); }


  }
  
  export default _header;