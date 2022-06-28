import {
  replaceWrapper,
  newLine,
  beforeBeginingNewLine,
  beforeEnd,
} from '../helpers';

import { REGEXP_SUB_LISTS } from '../../../domain/regular-expressions'


import { replaceUl, commonReplace } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';


// Case: when you have a sublist inside of your list
// TODO add _ in the name of this method in order to keep the same logic
// importing it into pre-replace-objects
function getParsedSubList(subList) {



  // beforeEnd
  // const regex_variable = `\\s{4}\\*(.*?)${newLine}`;
  // const regex = new RegExp(regex_variable, 'g');



  return subList.replace(REGEXP_SUB_LISTS, (text, subItem) => {


    const params = {
      content: subItem.trim(),
    };

    const config = {
      params,

      name: 'listItem',
      // debug: true
    };

    try {
      const replaced = commonReplace(config);      
      return replaced;
    } catch (error) {
      catch_error_trace_output(error);
    }


  });
}

function getParsedLists(parsedSubLists) {
  // beforeEnd

  const regex_variable = `\\*(.*?)${newLine}`;
  const regex = new RegExp(regex_variable, 'g');

  const parsedList = parsedSubLists.replace(regex, (text, listItem) => {
    // NOT FINISHED
    const params = {
      content: listItem.trim(),
    };

    const config = {
      // content: listItem.trim(),

      debug: true,
    };

    const replaced = replaceWrapper('listItem', config);

    return newLine + replaced;

    try {
      const replaced = replaceHeader(config);

      const result = newLine + replaced + newLine;
      return result;
    } catch (error) {
      catch_error_trace_output(error);
    }
  });

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

    // console.log(subList);


    const parsedSubItem = getParsedSubList(subList);

    console.log(parsedSubItem);

    // const params = {
    //   content: parsedSubItem + newLine,
    // };

    // const config = {
    //   params,

    //   name: 'list',
    //   debug: true,
    // };



    // try {
    //   const replaced = replaceUl(config);

    //   return newLine + replaced;

    // } catch (error) {
    //   catch_error_trace_output(error);
    // }
  });



  // const parsedList = getParsedLists(parsedSubListsParts);

  // const params = {
  //   content: parsedList + newLine,

  //   name: 'list',
  //   debug: true,
  // };

  // const config = {
  //   // content: parsedList + newLine,
  // };
  // // NOT FINISHED
  // const replaced = replaceWrapper('list', config);

  // return newLine + replaced + newLine;


}

// TODO update this. it's a real shitty method
function _olList(text, item) {
  // beforeBeginingNewLine

  return `${newLine}<ol>${newLine}\t
      <li>${item.trim()}</li>
      ${newLine}</ol>`;
}

export { _ulList, _olList, getParsedSubList };
