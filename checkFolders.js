const { isFolderExists } = require('markup-generator');

isFolderExists('generated');
isFolderExists('./src/tests/_generated');
isFolderExists('./src/parserMDReact/tests/_generated');