/* eslint-disable */
// https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript
/**
 * Abstract Class Replace.
 *
 * @class Replace
 */
class AbstractReplace {
  constructor() {
    this.replaceMDBinded = () => {};

    // Define methods as an empty array initially
    this.methods = [];
    // this.methods = methodsList;
    //   this.addMethods(methodsList);
    //   this.runMethods();
  }

  configure() {
    throw new Error("Method 'configure' must be implemented.");
  }

  // configure(state) {
  //   this.replaceMDBinded = replaceMarkdown.bind(state);

  // Call miscellaneous, template, and typography methods
  // this.miscellaneous();
  // this.template();
  // this.typography();
  // this.addMethods(methodsList);
  // }
  // Define miscellaneous, template, and typography methods as abstract methods
  //   miscellaneous() {
  //     throw new Error("Method 'miscellaneous' must be implemented.");
  //   }
  template() {
    throw new Error("Method 'template' must be implemented.");
  }

  typography() {
    throw new Error("Method 'typography' must be implemented.");
  }
  // Add a method to add more methods to the class
  addMethods(newMethods) {
    this.methods.push(...newMethods);
  }

  // Call methods added through addMethods
  runMethods() {
    // Object.keys(settings).forEach(key => {
    // for (const method of this.methods) {
    //   // console.log(method);
    //   this[method.name] = () => this.replaceMDBinded(method.arg);
    //   //   this[method]();
    // }
  }
}

export default AbstractReplace;
