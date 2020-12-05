const { readFile } = require("./utils");

//@TODO I dont like this method. it's hard to read it
function replaceMarkdown(regexp, callback, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    callback
  ));
}

function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
  let wrapper = readFile(`${folder}/${wrapperName}`);

  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
}

function replaceMarkdownPreviewText(regexp, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    (text, content) => {
      const config = {
        content: content.trim(),
      };

      sourceContent.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );
      return "";
    }
  ));
}


module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText,
  replaceHTMLWrapper
};
