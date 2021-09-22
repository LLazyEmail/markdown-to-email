import {
    __write,   
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
    __write,   
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