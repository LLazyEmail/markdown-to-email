const { isFolderExists } = require('./src/helper');
// ./helper');

isFolderExists('generated');
isFolderExists('./src/tests/_generated');
isFolderExists('./src/parserMDReact/tests/_generated');
