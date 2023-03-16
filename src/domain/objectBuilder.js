const objectBuilderMap = {
  // Case 1: constant is a string, replacer is a function, literal is a function
  withConstant: {
    check: (constant, replacer, literal) => hasConstant(constant) && isFunction(replacer) && isFunction(literal),
    buildObject: (constant, replacer, literal) => buildObjectWithRegEx(constant, replacer, literal)
  },
  // Case 2: constant is a string, replacer is a function, literal is false
  withoutLiteral: {
    check: (constant, replacer, literal) => hasConstant(constant) && isFunction(replacer) && !literal,
    buildObject: (constant, replacer, literal) => buildObjectWithRegEx(constant, replacer)
  },
  // Case 3: constant is false, replacer is false, literal is a function
  withLiteral: {
    check: (constant, replacer, literal) => !hasConstant(constant) && !isFunction(replacer) && isFunction(literal),
    buildObject: (constant, replacer, literal) => buildObjectForLiteral(replacer, literal)
  }
};


const objectBuilderMap2 = {
  CASE_1: {
    name: "CASE_1",
    hasConstant: true,
    hasReplacer: true,
    hasLiteral: true,
    buildObject: (constant, replacer, literal) => ({ constant, replacer, literal }),
  },
  CASE_2: {
    name: "CASE_2",
    hasConstant: true,
    hasReplacer: true,
    hasLiteral: false,
    buildObject: (constant, replacer, literal) => ({ constant, replacer }),
  },
  CASE_3: {
    name: "CASE_3",
    hasConstant: false,
    hasReplacer: false,
    hasLiteral: true,
    buildObject: (constant, replacer, literal) => ({ replacer, literal }),
  },
};


function ERROR_INVALID_ARGUMENTS(constant, replacer, literal) {
  return `Invalid arguments: constant=${constant}, replacer=${replacer}, literal=${literal}`;
}

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

function ERROR_REGEX_CONSTANT(constant) {
  return `Missing regex constant: ${constant}`;
}

function isFunction(obj) {
  return typeof obj === "function";
}

function hasConstant(constant) {
  return Boolean(constant);
}

function buildObjectForLiteral(replacer, literal) {
  return { replacer, literal };
}

function buildObjectWithRegEx(constant, replacer) {
  return { constant, replacer };
}


function objectBuilder(constant, replacer, literal = false) {
  if (hasConstant(constant) || (literal && !hasConstant(constant))) {
    if (!isFunction(replacer)) {
      throw new Error(ERROR_REPLACER_FUNCTION(replacer || false));
    }

    if (literal) {
      return { replacer, literal };
    } else {
      return buildObjectWithRegEx(constant, replacer);
    }
  } else {
    throw new Error(ERROR_REGEX_CONSTANT(constant));
  }
}

// -------------

const objectBuilderMap = {
  CASE_1: {
    name: "CASE_1",
    hasConstant: true,
    hasReplacer: true,
    hasLiteral: true,
    buildObject: (constant, replacer, literal) => ({ constant, replacer, literal }),
  },
  CASE_2: {
    name: "CASE_2",
    hasConstant: true,
    hasReplacer: true,
    hasLiteral: false,
    buildObject: (constant, replacer, literal) => ({ constant, replacer }),
  },
  CASE_3: {
    name: "CASE_3",
    hasConstant: false,
    hasReplacer: false,
    hasLiteral: true,
    buildObject: (constant, replacer, literal) => ({ replacer, literal }),
  },
};
// ----------------

function hasConstant(constant) {
  return Boolean(constant);
}

function isFunction(obj) {
  return typeof obj === "function";
}



function getKey(constant, replacer, literal) {
  const hasConstant = Boolean(constant);
  const hasReplacer = isFunction(replacer);

  if (hasConstant && hasReplacer && literal) {
    return "CRL";
  }

  if (hasConstant && hasReplacer && !literal) {
    return "CRn";
  }

  if (!hasConstant && !hasReplacer && literal) {
    return "nLn";
  }

  throw new Error(`Invalid combination of arguments: ${hasConstant}, ${hasReplacer}, ${literal}`);
}

function ERROR_INVALID_ARGUMENTS(constant, replacer, literal) {
  return `Invalid arguments: constant=${constant}, replacer=${replacer}, literal=${literal}`;
}


function getOptions(constant, replacer, literal = false) {
  const key = getKey(constant, replacer, literal);
  const objectBuilder = objectBuilderMap[key];

  if (!objectBuilder) {
    throw new Error(`Invalid combination of arguments: ${key}`);
  }

  return objectBuilder(constant, replacer, literal);
}


function objectBuilder(constant = '', replacer = () => {}, literal = false) {
  const options = getOptions(constant, replacer, literal);
  return options;
}






