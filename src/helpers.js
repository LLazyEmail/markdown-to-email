const { readFile } = require("./utils");

function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
  //this part will be updated very soon
  let layouts_location = `${folder}/${wrapperName}`;
  let wrapper = readFile(layouts_location);

  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
}


//@TODO I dont like this method. it's hard to read it
function replaceMarkdown(regexp, callback) {
  const callB = typeof callback !== 'string' ? callback.bind(this) : callback;

  this.content = this.content.replace(
    regexp,
    callB
  );
}



function replaceMarkdownPreviewText(regexp) {
  const config = {
          content: this.content.trim(),
        };

  this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );


  this.errors.previewText = true;

  this.content = this.content.replace(
      regexp,
      () => {
        return this.previewText;
      }
    );
}


module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText,
  replaceHTMLWrapper
};
