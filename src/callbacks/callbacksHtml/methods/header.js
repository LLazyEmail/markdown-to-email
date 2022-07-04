import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';

import { replaceHeader, commonReplace } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';



import CallbackFactory from '../../../domain/callbacks-factory';

// TODO fix issue related to text variable
function _header(text, chars, content) {
  // const factory = CallbackFactory.create();


  const params = {
    content: content.trim(),
  };

  const titleTypes = ['title', 'subtitle', 'heading'];

  const name = titleTypes[chars.length - 1];

  // console.log(name);

  const config = {
    params,
    name,
    // name: 'header',
    debug: true,
  };

  // NOT FINISHED
  // console.log(config);



  try {
    // console.log('123');
    // const replaced = commonReplace(config);
    const replaced = replaceHeader(config);
    return newLine + replaced;
    
  } catch (error) {
    catch_error_trace_output(error);
  }

}

// im thinking about creating few methods that will work separately from 
// _header callback

export default _header;
