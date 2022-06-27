import { replaceHeader } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'

// // TODO remove unused `text` argument
function _meme(text, src, href, altText) {

    const params = {
        src: src.trim(),
        altText: altText.trim(),
        href: href.trim(),
    };


    const config = {
    //   src: src.trim(),
    //   altText: altText.trim(),
    //   href: href.trim(),
    params,

      name: 'image',
      debug: true
    };


  //   //REPLACEWRAPPER CAN BECOME REPLACE LITERAL
    // const replaced = replaceWrapper(
    //     'image', config
    //     );
    
    //   return replaced;
  
    try {

        const replaced = replaceHeader(config);

      
        return newLine + replaced;
    
      } catch (error) { catch_error_trace_output(error); }

  
}

  export default _meme;