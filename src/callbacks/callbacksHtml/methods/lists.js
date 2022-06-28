import {
  replaceWrapper,
  newLine,
  beforeBeginingNewLine,
  beforeEnd,
} from '../helpers';

function getParsedSubList(subList) {
  // beforeEnd
  const regex_variable = `\\s{4}\\*(.*?)${newLine}`;
  const regex = new RegExp(regex_variable, 'g');

  return subList.replace(regex, (text, subItem) => {
    const params = {};

    const config = {
      content: subItem.trim(),
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

const ul_list_replace_a1 = (text, subList) => {};

// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function _ulList(text, list) {
  const regex_variable = `((\\s{4}\\*(.*?)${newLine}){1,})`;
  const regex = new RegExp(regex_variable, 'g');

  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(regex, (text, subList) => {
    const parsedSubItem = getParsedSubList(subList);

    const params = {
      content: parsedSubItem + newLine,
    };

    const config = {
      // content: parsedSubItem + newLine,

      name: 'list',
      debug: true,
    };

    // var replaced = replaceWrapper(
    //   'list',
    //   config
    // );
    // return newLine + replaced;

    // NOT FINISHED
    try {
      const replaced = replaceHeader(config);

      const result = newLine + replaced + newLine;
      return result;
    } catch (error) {
      catch_error_trace_output(error);
    }
  });

  const parsedList = getParsedLists(parsedSubListsParts);

  const params = {
    content: parsedList + newLine,

    name: 'list',
    debug: true,
  };

  const config = {
    // content: parsedList + newLine,
  };
  // NOT FINISHED
  const replaced = replaceWrapper('list', config);

  return newLine + replaced + newLine;
}

// @TODO update this. it's a real shitty method
function _olList(text, item) {
  // beforeBeginingNewLine

  return;
  `${newLine}<ol>${newLine}\t
      <li>${item.trim()}</li>
      ${newLine}</ol>`;
}

export { _ulList, _olList };
