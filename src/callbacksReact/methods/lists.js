/* eslint-disable */
import { replaceWrapper, newLine } from '../helpers';

const _hr = () => `${newLine}<hr />`;
const _empty = () => '';

function getParsedSubList(subList) {
  return subList.replace(
    new RegExp(`\\s{4}\\*(.*?)${newLine}`, 'g'),
    (text, subItem) => {

  const params = {
    content: subItem.trim(),
  };

  const config = {    
    params,
    name: 'listItem',
    debug: true,
  };
      

      // return `${newLine + replaceWrapper('listItem', config)}`;


    },
  );
}

// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function _ulList(text, list) {
  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, 'g'),
    (text, subList) => {
      const parsedSubItem = getParsedSubList(subList);

  const params = {
    content: parsedSubItem + newLine,
    type: 'UL',
  };

  const config = {    
    params,
    name: 'list?',
    debug: true,
  };
     

      // return `${newLine + replaceWrapper('list', config)}`;


    },
  );

  const parsedList = parsedSubListsParts.replace(
    new RegExp(`\\*(.*?)${newLine}`, 'g'),
    (text, listItem) => {

  const params = {
           content: listItem.trim(),
  };

  const config = {    
    params,
    name: 'listItem?',
    debug: true,
  };
 

      // return `${newLine + replaceWrapper('listItem', config)}`;
    },
  );


  const params = {
    content: parsedList + newLine,
    type: 'UL',
  };

  const config = {    
    params,
    name: 'list',
    debug: true,
  };

  // const config = {

  // };

  // return `${newLine + replaceWrapper('list', config) + newLine}`;
}

function _olList(text, item) {
  return `${newLine}<ol>${newLine}\t<li>${item.trim()}</li>${newLine}</ol>`;
}

export { _ulList, _olList };
