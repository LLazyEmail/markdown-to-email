import { replaceReactWrapper, newLine } from '../helpers';

// const {
//   newLine, replaceReactWrapper
// } = require("atherdon-callbacks");


const hr = `${newLine}<hr />`;
const empty = '';

function getParsedSubList(subList) {
  return subList.replace(
    new RegExp(`\\s{4}\\*(.*?)${newLine}`, 'g'),
    (text, subItem) => {
      const config = {
        content: subItem.trim(),
      };

      return `${newLine + replaceReactWrapper('listItem', config)}`;
    },
  );
}

// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function ulList(text, list) {
  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, 'g'),
    (text, subList) => {
      const parsedSubItem = getParsedSubList(subList);

      const config = {
        content: parsedSubItem + newLine,
        type: 'UL',
      };

      return `${newLine + replaceReactWrapper('list', config)}`;
    },
  );

  const parsedList = parsedSubListsParts.replace(
    new RegExp(`\\*(.*?)${newLine}`, 'g'),
    (text, listItem) => {
      const config = {
        content: listItem.trim(),
      };

      return `${newLine + replaceReactWrapper('listItem', config)}`;
    },
  );

  const config = {
    content: parsedList + newLine,
    type: 'UL',
  };

  return `${newLine + replaceReactWrapper('list', config) + newLine}`;
}

function olList(text, item) {
  return (
    `${newLine}<ol>${newLine}\t<li>${item.trim()}</li>${newLine}</ol>`
  );
}

export {
  ulList,
  olList
};
