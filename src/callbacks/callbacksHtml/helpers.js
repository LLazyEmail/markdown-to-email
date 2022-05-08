// import {generateNewString} from '';

// import body from '../../templates/OuterTemplate/layouts/body';
// import misc from '../../templates/OuterTemplate/layouts/misc';
// import NewPlainJSLayouts from '../../templates/OuterTemplate';

// console.log(layouts);

// console.log(NewPlainJSLayouts);
// TODO needs to be checked and replace on correct
const newLine = '\n';

// eslint-disable-next-line no-unused-vars
function replaceWrapper(name, config, folder = 'typography') {
  // TODO later we can get rid of it completely.
  // right now it's only for back campatibility purposes
  // const configCopy = Object.assign(config, {
  //   // TODO I am not sure is it correct structure
  //   layouts: { body, misc },
  //   folder,
  // });
  // console.log(configCopy);
  // return generateNewString(name, configCopy);
}

export {
  newLine,
  replaceWrapper,
  // replaceReactWrapper
};
