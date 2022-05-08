import body from '../layouts/body';

import headComponent from '../components/head';

import mainComponent from '../components/main';

import footer from '../components/footer';

import EmailTemplateBodyComponent from '../components/body';

const { logoTop, logoBottom } = body;

const fakeTitleGenerator = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
};

const generateTemplateComponent = () => {
  const title = fakeTitleGenerator();

  const TemplateHead = headComponent(title);

  // is it with content or doesnt?
  const bodyWithContent = EmailTemplateBodyComponent(
    footer,
    logoTop,
    logoBottom,
  );

  return mainComponent(TemplateHead, bodyWithContent);
};

export default generateTemplateComponent;
