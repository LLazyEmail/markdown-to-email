// Creates the output folders the generator and tests write into.
// Uses fs directly: requiring ./src/helper (ESM with directory imports)
// fails on current Node with ERR_UNSUPPORTED_DIR_IMPORT.
const fs = require('fs');

[
  'generated',
  './src/tests/_generated',
  './src/parserMDReact/tests/_generated',
].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
