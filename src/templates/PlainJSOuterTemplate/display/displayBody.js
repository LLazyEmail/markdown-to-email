// TODO undisable eslint
/* eslint-disable */
// partials
// @TODO rename body into something better
import EmailTemplateBodyComponent from '../components/body';

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';
const checkingBodyContent = (bodyContent) => {
  if (!bodyContent) {
    throw new Error('`bodyContent` is a required option for `renderTemplate`');
  }
};

// note that footer param here is a subcomponent,
// so we passing footerDisplay instead of just a component
const DisplayBody = {
  component: EmailTemplateBodyComponent,
  params: { footer, logoTop, logoBottom, content },
  display: () => {
    //console.log(this.component(params))
  },
  checks: () => [],
};

export default DisplayBody;
