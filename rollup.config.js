// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/parser.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};
