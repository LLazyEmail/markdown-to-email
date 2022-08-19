import { map } from 'lodash';

const callbacksAdapter = (
  callbacks,
  // Replacer
) => {
  // eslint-disable-next-line no-unused-vars
  const newObject = map(callbacks, {
    // callback --> we need to find same part at Replacer
    // return ... https://www.velotio.com/engineering-blog/design-patterns-in-es6
  });
};

export default callbacksAdapter;
