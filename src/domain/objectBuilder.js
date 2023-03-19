/**
 * Returns an error message for a missing regex constant.
 * @param {string} constant - The missing regex constant.
 * @returns {string} An error message for the missing regex constant.
 */
function ERROR_REGEX_CONSTANT(constant) {
  return `Missing regex constant: ${constant}`;
}

/**
 * Returns an error message for an undefined or non-function replacer.
 * @param {any} replacer - The undefined or non-function replacer.
 * @returns {string} An error message for the undefined or non-function replacer.
 */
function ERROR_REPLACER_FUNCTION(replacer) {
  return `Invalid replacer function: ${replacer}`;
}
// ---------------
// TODO to make this method working better [improvement]
// 1. to handle a case when literal is false, it's very scary
// 2. we really need to be able to handle a situation when replacer isn't defined before (by different reasons)
// 3. does this function works fine with `components`
// 4. when something wrong - i want to have a better output about params that we passed
/**
 * Creates an object with properties for a regex constant, a replacer function, and a boolean literal value.
 * @param {string} constant - The regex constant to use for the object.
 * @param {function} replacer - The replacer function to use for the object.
 * @param {boolean} [literal=false] - An optional boolean value to indicate whether the regex should be matched literally or not.
 * @returns {object} An object with properties for the regex constant, replacer function, and literal value.
 * @throws {Error} Throws an error if either constant or replacer is undefined.
 */
function objectBuilder(constant, replacer, literal = false) {
  // TODO: Add typeof check for replacer function to ensure it is a function.
  // console.log( typeof element.replacer === 'undefined' );

  if (!constant) {
    throw new Error(ERROR_REGEX_CONSTANT(constant));
  }

  if (!replacer) {
    throw new Error(ERROR_REPLACER_FUNCTION(replacer || false));
  }

  // TODO: Consider replacing the return value with a new Components object.
  // The Components object could store multiple constants, replacer functions, and literal values.
  // It could also have a method for applying the regexes to a given string.
  // This would make it easier to work with multiple regexes and replacer functions in one place.

  return { constant, replacer, literal };
}

export default objectBuilder;
