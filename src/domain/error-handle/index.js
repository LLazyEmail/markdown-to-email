//---------------------

// something like

const ERROR_REGEX_CONSTANT = (value) =>
  `something wrong with RegEx constant ${value}`;
const ERROR_REPLACER_FUNCTION = (value) =>
  `something wrong with replacer function ${value}`;

function extractOptions(converter, key) {
  if (!converter.key) throw new Error('no options for this converter');
  return converter.key;
}

// TODO WE NEED MAKE IT WORK
function inspector(variable = false) {
  // console.log( typeof element.replacer === 'undefined' );
  // console.log( element.replacer === null );

  if (typeof variable === 'undefined' || variable === null) {
    // variable is undefined or null
    return false;
  }
  return true;
}


const catch_error_trace_output = (error) => {
  // we need to test how it actually work
  const caller_line = error.stack.split('\n')[4];
  const index = caller_line.indexOf('at ');
  const clean = caller_line.slice(index + 2, caller_line.length);

  throw error;
};

const tracingVariables = (regexp, replacer, callback) => {
  try {
    if (!regexp) throw new Error('regular expression is blank');
    if (!callback) throw new Error('no callback presented');

    // should we do something here?

    // ... add more here later
  } catch (err) {
    // we need to test how it actually work
    const caller_line = err.stack.split('\n')[4];
    const index = caller_line.indexOf('at ');
    const clean = caller_line.slice(index + 2, caller_line.length);

    throw err;
  }
};

export { catch_error_trace_output, inspector };
