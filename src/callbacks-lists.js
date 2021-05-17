// @TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function ulList(text, list) {
  // @todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, 'g'),
    (text, subList) => {
      const parsedSubItem = subList.replace(
        new RegExp(`\\s{4}\\*(.*?)${newLine}`, 'g'),
        (text, subItem) => {
          const config = {
            content: subItem.trim(),
          };

          return `${newLine + replaceHTMLWrapper('listItem', config)}`;
        },
      );

      const config = {
        content: parsedSubItem + newLine,
      };

      return `${newLine + replaceHTMLWrapper('list', config)}`;
    },
  );

  const parsedList = parsedSubListsParts.replace(
    new RegExp(`\\*(.*?)${newLine}`, 'g'),
    (text, listItem) => {
      const config = {
        content: listItem.trim(),
      };

      return `${newLine + replaceHTMLWrapper('listItem', config)}`;
    },
  );

  const config = {
    content: parsedList + newLine,
  };

  return `${newLine + replaceHTMLWrapper('list', config) + newLine}`;
}

// @TODO update this. it's a real shitty method
function olList(text, item) {
  return `${newLine}<ol>${newLine}\t<li>${
    item.trim()
  }</li>${newLine}</ol>`;
}


module.exports = {
  ulList,
  olList
}