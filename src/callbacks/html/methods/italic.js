import { commonReplace } from '../../../domain/replace-wrapper3.0';

const _italic = (text, content, a, b, c) => {
  // TODO we need to debug italic
  // https://github.com/LLazyEmail/markdown-to-email/issues/1265
  // console.log(text)
  // console.log(content)
  // console.log('-----------');

  const params = {
    content: text.trim(),
  };

  const config = {
    params,

    name: 'italic',
    debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
};

const _italicAsterix = (text, content) => {
  console.log(text);
  console.log(content);

  const params = {
    content: text.trim(),
  };

  const config = {
    params,

    name: 'italic_asterix',
    debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
};

export { _italic, _italicAsterix };
