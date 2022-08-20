import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import { generateTemplateName, printMessage } from '../../../helper';
import { reactFullTemplate } from './generateReactFullTemplate/components/reactFullTemplate';
import {
  writeHTML,
  // isFolderExists
} from '../../../domain/write';
import Replace from './components/Replacer.class';
import configurationMap from './components/configurationMap';

// TODO add more messages here, and finally replace messages in our methods
const MESSAGE_REACT_FULL_TEMPLATE =
  'The FullTemplate has been parsed successfully';
// const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';

const parseReactContent = (source) =>
  parse(source, (state) => Replace.configure(state), configurationMap);

export const generateReactFullTemplate = (sourceFile) => {
  const {
    content,
    warnings,
    // previewText
  } = parseReactContent(sourceFile);

  verification(warnings);

  const fullContent = reactFullTemplate(content);

  // TODO replace this three rows on deliver function
  const fileName = generateTemplateName('FullTemplate', 'js');
  writeHTML(fileName, fullContent);
  printMessage(MESSAGE_REACT_FULL_TEMPLATE, 'green2');
};
