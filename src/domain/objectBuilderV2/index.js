// const objectBuilderMap = {
//     // Case 1: constant is a string, replacer is a function, literal is a function
//     withConstant: {
//       check: (constant, replacer, literal) => hasConstant(constant) && isFunction(replacer) && isFunction(literal),
//       buildObject: (constant, replacer, literal) => buildObjectWithRegEx(constant, replacer, literal)
//     },
//     // Case 2: constant is a string, replacer is a function, literal is false
//     withoutLiteral: {
//       check: (constant, replacer, literal) => hasConstant(constant) && isFunction(replacer) && !literal,
//       buildObject: (constant, replacer, literal) => buildObjectWithRegEx(constant, replacer)
//     },
//     // Case 3: constant is false, replacer is false, literal is a function
//     withLiteral: {
//       check: (constant, replacer, literal) => !hasConstant(constant) && !isFunction(replacer) && isFunction(literal),
//       buildObject: (constant, replacer, literal) => buildObjectForLiteral(replacer, literal)
//     }
//   };

//   const objectBuilderMap2 = {
//     CASE_1: {
//       name: "CASE_1",
//       hasConstant: true,
//       hasReplacer: true,
//       hasLiteral: true,
//       buildObject: (constant, replacer, literal) => ({ constant, replacer, literal }),
//     },
//     CASE_2: {
//       name: "CASE_2",
//       hasConstant: true,
//       hasReplacer: true,
//       hasLiteral: false,
//       buildObject: (constant, replacer, literal) => ({ constant, replacer }),
//     },
//     CASE_3: {
//       name: "CASE_3",
//       hasConstant: false,
//       hasReplacer: false,
//       hasLiteral: true,
//       buildObject: (constant, replacer, literal) => ({ replacer, literal }),
//     },
//   };

// const objectBuilderMap3 = {
//     CASE_1: {
//       name: "CASE_1",
//       hasConstant: true,
//       hasReplacer: true,
//       hasLiteral: true,
//       buildObject: (constant, replacer, literal) => ({ constant, replacer, literal }),
//     },
//     CASE_2: {
//       name: "CASE_2",
//       hasConstant: true,
//       hasReplacer: true,
//       hasLiteral: false,
//       buildObject: (constant, replacer, literal) => ({ constant, replacer }),
//     },
//     CASE_3: {
//       name: "CASE_3",
//       hasConstant: false,
//       hasReplacer: false,
//       hasLiteral: true,
//       buildObject: (constant, replacer, literal) => ({ replacer, literal }),
//     },
//   };
//   // ----------------

//   function ERROR_INVALID_ARGUMENTS(constant, replacer, literal) {
//     return `Invalid arguments: constant=${constant}, replacer=${replacer}, literal=${literal}`;
//   }

// function isFunction(obj) {
//     return typeof obj === "function";
//   }

//   function hasConstant(constant) {
//     return Boolean(constant);
//   }

//   function buildObjectForLiteral(replacer, literal) {
//     return { replacer, literal };
//   }

//   function buildObjectWithRegEx(constant, replacer) {
//     return { constant, replacer };
//   }

//   function objectBuilder(constant, replacer, literal = false) {
//     if (hasConstant(constant) || (literal && !hasConstant(constant))) {
//       if (!isFunction(replacer)) {
//         throw new Error(ERROR_REPLACER_FUNCTION(replacer || false));
//       }

//       if (literal) {
//         return { replacer, literal };
//       } else {
//         return buildObjectWithRegEx(constant, replacer);
//       }
//     } else {
//       throw new Error(ERROR_REGEX_CONSTANT(constant));
//     }
//   }

//   // -------------

//   function hasConstant(constant) {
//     return Boolean(constant);
//   }

//   function isFunction(obj) {
//     return typeof obj === "function";
//   }

//   function getKey(constant, replacer, literal) {
//     const hasConstant = Boolean(constant);
//     const hasReplacer = isFunction(replacer);

//     if (hasConstant && hasReplacer && literal) {
//       return "CRL";
//     }

//     if (hasConstant && hasReplacer && !literal) {
//       return "CRn";
//     }

//     if (!hasConstant && !hasReplacer && literal) {
//       return "nLn";
//     }

//     throw new Error(`Invalid combination of arguments: ${hasConstant}, ${hasReplacer}, ${literal}`);
//   }

//   function ERROR_INVALID_ARGUMENTS(constant, replacer, literal) {
//     return `Invalid arguments: constant=${constant}, replacer=${replacer}, literal=${literal}`;
//   }

//   function getOptions(constant, replacer, literal = false) {
//     const key = getKey(constant, replacer, literal);
//     const objectBuilder = objectBuilderMap[key];

//     if (!objectBuilder) {
//       throw new Error(`Invalid combination of arguments: ${key}`);
//     }

//     return objectBuilder(constant, replacer, literal);
//   }

//   function objectBuilder(constant = '', replacer = () => {}, literal = false) {
//     const options = getOptions(constant, replacer, literal);
//     return options;
//   }
