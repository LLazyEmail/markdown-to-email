// import NewPlainJSLayouts from '../../templates/OuterTemplate';

// console.log(layouts);

// console.log(NewPlainJSLayouts);

// TODO needs to be checked and replace on correct
const newLine = '\n';

function beforeBeginingNewLine(string) {
  return newLine + string;
}

function beforeEnd(string) {
  return string + newLine;
}



export {
  newLine,
  beforeBeginingNewLine,
  beforeEnd,
};
