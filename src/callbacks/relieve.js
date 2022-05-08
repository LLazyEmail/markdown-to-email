/* eslint-disable */
// basically, it's a copy of replaceWrapper functions

// config.folder
// config.type aka plain or react
function relieve(name, config) {
  const folder = config.folder || 'typography';

  // we need to have an if, for passing plain or react stuff
  // let wrapper = getWrapper(layouts, folder, name)

  switch (config.type) {
    case 'plain':
      // let wrapper = getWrapper(layouts, folder, name)
      replaceWrapper(name, config, folder);
      break;

    case 'react':
      // let wrapper = getWrapper(reactLayouts, folder, name)
      replaceReactWrapper(name, config, folder);
      break;

    default:
      break;
  }
}

export {
  // newLine,

  relieve,
};
