// TODO looks interesting to implement
// class MissingFieldsError extends Error {
//   constructor(fields, ...params) {
//     super(...params);
//     this.fields_ = fields;
//   }

//   getMissingFields() {
//     return this.fields_;
//   }
// }
// throw new MissingFieldsError("msg")

const ERROR_REGEX_CONSTANT = (value) =>
  `something wrong with RegEx constant ${value}`;

const ERROR_REPLACER_FUNCTION = (value) =>
  `something wrong with replacer function ${value}`;

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
