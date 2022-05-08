import body from 'atherdon-newsletter-js-layouts-body';

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

const generateEmptyTemplateComponent = () => {
  const emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

  const title = fakeTitleGenerator();

  const TemplateHead = headComponent(title);

  return mainComponent(TemplateHead, emptyContent);
};

export default generateEmptyTemplateComponent;
