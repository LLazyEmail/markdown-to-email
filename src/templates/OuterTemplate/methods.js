import { writeHTML, generateTemplateName } from 'markup-generator';
//-----

// methods like displayMain, displayHead and others not working well,
// because i decide to reorganize the folder structure

import mainComponent from './components/main';
import displayHead from './components/head';

// import mainComponent from './components/main';
// import headComponent from './components/head';

// import DisplayMain from './display/displayMain';
// import DisplayHead from './display/displayHead';
// import DisplayFooter from './display/displayFooter';

// and body
//----

// instead of importhing these methods we can run displayXXX.checks[xxx]

// import { checkingTitle,
//   checkingBodyContent,
//   checkingPreviewText
// } from './t/display'

import footer from './components/footer';

import EmailTemplateBodyComponent from './components/body';

// not working anymore
const printMain = () => {
  return mainComponent();
  // return mainComponent("xxx", "xxx");
  //   mainComponent(head, bodyComponent);
};

// not working anymore
const printFooter = () => {
  return footer('', '', '', '');
  //
};

// not working anymore
const printBody = () => {
  return EmailTemplateBodyComponent(footer, '', '');
  // EmailTemplateBodyComponent(footer, logoTop, logoBottom)
};

// not working anymore
const printHead = () => {
  return displayHead('Ziba Zyaba Zoooo');
  // return headComponent("Ziba Zyaba Zoooo", "xxx", "xxx");
};

const writingFile = (content) => {
  // const content  = generateEmptyTemplateComponent();
  const fileName = generateTemplateName('lit-empty');

  writeHTML(fileName, content);
};

export { printMain, printFooter, printBody, printHead, writingFile };
