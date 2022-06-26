const headline = `content`;

const headlineComponent = (content) => {
  if (!content) new Error('invalid content');

  return content;
};

export { headline, headlineComponent };
