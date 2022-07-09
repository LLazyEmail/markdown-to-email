import {
  // replaceWrapper,
  newLine,
  beforeBeginingNewLine,
  beforeEnd,
} from '../helpers';

import { REGEXP_SUB_LISTS } from '../../../domain/regular-expressions'
import { commonReplace } from '../../../domain/replace-wrapper3.0';

// Case: when you have a sublist inside of your list
// TODO add _ in the name of this method in order to keep the same logic
// importing it into pre-replace-objects
// PLus, I dont like this stupid long return
function getParsedSubList(subList) {

  return subList.replace(REGEXP_SUB_LISTS, (text, subItem) => {


    const params = {
      content: subItem.trim(),
    };

    const config = {
      params,

      name: 'listItem',
      // debug: true
    };

    const replaced = commonReplace(config);      
    return replaced;


  });
}


// TODO fix this method. I dont think it works well for a complex lists at all
function getParsedLists(parsedSubLists) {

  // TODO move it into regex 
  // beforeEnd

  const regex_variable = `\\*(.*?)${newLine}`;
  const regex = new RegExp(regex_variable, 'g');

  const parsedList = parsedSubLists.replace(regex, (text, listItem) => {


    const params = {
      content: listItem.trim(),
    };

    const config = {

      params,

      name: 'listItem',
      // debug: true,
    };


    const replaced = commonReplace(config);
    return newLine + replaced;

  });

  // console.log(parsedList)

  return parsedList;
}

// const ul_list_replace_a1 = (text, subList) => {};

// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function _ulList(text, list) {


  const regex_variable = `((\\s{4}\\*(.*?)${newLine}){1,})`;
  const regex = new RegExp(regex_variable, 'g');

  // console.log(list);


  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(regex, (text, subList) => {

    const parsedSubItem = getParsedSubList(subList);

    const params = {
      content: parsedSubItem + newLine,
    };

    const config = {
      params,

      name: 'list',
      // debug: true,
    };


    const replaced = commonReplace(config);
    return newLine + replaced;

  });



  const parsedList = getParsedLists(parsedSubListsParts);

  const params = {
    content: parsedList + newLine,    
  };

  const config = {
    params,

    name: 'list',
    // debug: true,
  };

  const replaced = commonReplace(config);

  return newLine + replaced + newLine;


}

// TODO update this. it's a real shitty method
function _olList(text, item) {
  // beforeBeginingNewLine

  return `${newLine}<ol>${newLine}\t
      <li>${item.trim()}</li>
      ${newLine}</ol>`;
}

export { _ulList, _olList, getParsedSubList };
