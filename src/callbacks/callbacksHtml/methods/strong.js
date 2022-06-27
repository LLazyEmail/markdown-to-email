import { replaceHeader } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'

// TODO make sense to the text variable
// probably Vadim knows what is doing on here,
// I think he was the person that did all these funcitons.


import CallbackFactory from '../../../domain/callbacks-factory';

import mainObj from '../../../domain/replace-markdown/pre-replace-objects';


// SOON CALLBACKS WILL RETURN SETTINGS ONLY
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
    name: 'strong',  
    valuesObj: mainObj['strong'],
    debug: true, 
    replacerMethod: replaceHeader
  }
  
  const factory = new CallbackFactory;  
  factory.create(settings);


    // NOT FINISHED
   
    // try {

    //   const replaced = replaceHeader(config);

    
    //   return replaced;
  
    // } catch (error) { catch_error_trace_output(error); }


  }

  export default _strong;