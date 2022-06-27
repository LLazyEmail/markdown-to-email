import { replaceHeader } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'

// TODO make sense to the text variable
// probably Vadim knows what is doing on here,
// I think he was the person that did all these funcitons.


import CallbackFactory from '../../../domain/callbacks-factory';


function _strong(text, doubleAsterix, content, asterix) {
    
  const params = {
    content: `${content + asterix}`,
  };

  const config = {
      params,

      name: 'strong',  
      debug: true
  };

  const settings = {
    params,


    debug: true
  }
  
  const factory = new CallbackFactory;  
  factory.create();
    // NOT FINISHED
    
    // const replaced = replaceWrapper(
    //   'strong', config
    //   );
  
    // return replaced;

    try {

      const replaced = replaceHeader(config);

    
      return replaced;
  
    } catch (error) { catch_error_trace_output(error); }
  }

  export default _strong;