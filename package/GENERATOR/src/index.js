import {
    write,   
    readSourceFile,
    isFolderExists,
    generateTemplateName
  } from './utils'

import {  
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,

  printMessage,
  stateInit
} from './command-line-methods'

  export default {
    write,   
    readSourceFile,
    isFolderExists,
    generateTemplateName,

    displayCLIErrors,
    checkErrors,
    checkWarnings,
    checkHtml,
  
    printMessage,
    stateInit
  }