const { isFolderExists } = require('./src/utils');

isFolderExists('generated');
isFolderExists('./src/tests/_generated');
