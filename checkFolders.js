const { isFolderExists } = require('markup-generator');

isFolderExists('generated');

isFolderExists('./tests/_generated');
// isFolderExists('./src/react/tests/_generated');