// import {} from 'atherdon-newsletter-constants'

import { replaceWrapper, newLine } from '../helpers';

function getParsedSubList(subList) {

  const regex = new RegExp(`\\s{4}\\*(.*?)${newLine}`, 'g');

  return subList.replace(
    regex,
    (text, subItem) => {

      const config = {
        content: subItem.trim(),
      };



      const replaced = replaceWrapper(
        'listItem', 
        config
      );

      return  newLine + replaced;
      
    },
  );
}

function getParsedLists(parsedSubLists){
  const regex = new RegExp(`\\*(.*?)${newLine}`, 'g');

  const parsedList = parsedSubLists.replace(
    regex,
    (text, listItem) => {

      const config = {
        content: listItem.trim(),
      };


      var replaced = replaceWrapper(
        'listItem', 
        config
      );

      return newLine + replaced; 

    },
  );

  return parsedList;
}

// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function ulList(text, list) {

  const regex = new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, 'g');

  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    regex,
    (text, subList) => {

      const parsedSubItem = getParsedSubList(subList);

      const config = {
        content: parsedSubItem + newLine,
      };
      
      var replaced = replaceWrapper(
        'list', 
        config
      );
      return newLine + replaced; 

    },
  );


  const parsedList = getParsedLists(parsedSubListsParts);  

  const config = {
    content: parsedList + newLine,
  };

  const replaced = replaceWrapper(
    'list', 
    config
  );
  
  return newLine + replaced + newLine;

}

// @TODO update this. it's a real shitty method
function olList(text, item) {
  return `${newLine}<ol>${newLine}\t<li>${
    item.trim()
  }</li>${newLine}</ol>`;
}

export {
  ulList,
  olList
};
