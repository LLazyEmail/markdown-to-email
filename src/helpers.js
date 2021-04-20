const layouts = require("atherdon-newsletter-js-layouts");
const reactLayouts = require("atherdon-newsletter-react");

function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
  // this part will be updated very soon
  let wrapper = layouts[folder][wrapperName];
  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
}

function replaceReactWrapper(wrapperName, config, folder = "typography") {
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);
  // this part will be updated very soon
  let wrapper = reactLayouts[folder][wrapperName];
  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
}

//@TODO I dont like this method. it's hard to read it
function replaceMarkdown(regexp, callback) {
  const callB = typeof callback !== "string" ? callback.bind(this) : callback;
  this.content = this.content.replace(regexp, callB);
}

function replaceMarkdownPreviewText(regexp) {
  const config = {
    content: this.content.trim(),
  };
  /*
  this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );
      console.log(this.previewText)
 */
  this.errors.previewText = true;

  this.content = this.content.replace(regexp, () => {
    return this.previewText;
  });
}

module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText,
  replaceReactWrapper,
  replaceHTMLWrapper,
};
