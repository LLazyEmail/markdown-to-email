const { readFile } = require("./utils");

//@TODO I dont like this method. it's hard to read it
function replaceMarkdown(regexp, callback) {
  const callB = typeof callback !== 'string' ? callback.bind(this) : callback;
  
  this.content = this.content.replace(
    regexp,
    callB
  );
}

function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
  let wrapper = readFile(`${folder}/${wrapperName}`);

  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
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

//console.log(config.content)

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
