const ERROR_REGEX_CONSTANT = (value) =>
  `something wrong with RegEx constant ${value}`;

const ERROR_REPLACER_FUNCTION = (value) =>
  `something wrong with replacer function ${value}`;

// TODO to make this method working better [improvement]
// 1. to handle a case when literal is false, it's very scary
// 2. we really need to be able to handle a situation when replacer isn't defined before (by different reasons)
// 3. does this function works fine with `components`
// 4. when something wrong - i want to have a better output about params that we passed

function objectBuilder(constant, replacer, literal = false) {
  // TODO add typeof for checking replacer as a function
  // console.log( typeof element.replacer === 'undefined' );

  if (!constant) {
    throw new Error(ERROR_REGEX_CONSTANT(constant));
  }

  if (!replacer) {
    throw new Error(ERROR_REPLACER_FUNCTION(replacer || false));
  }

  // i want to replace it later with components
  return { constant, replacer, literal };
}

export default objectBuilder;
