import { replaceWrapper, newLine } from '../helpers';


function _separator() {

  const params = { };


  const config = {
    params,

    name: 'separator',
    debug: true
  };


// NOT FINISHED

  
  // const replaced = replaceWrapper(
  //   'separator', config
  //   );

  // const result = newLine + replaced + newLine;
 


  try {

    const replaced = replaceHeader(config);
    


    const result = newLine + replaced + newLine;
    return result;

  } catch (error) { catch_error_trace_output(error); }



}

export default _separator;

