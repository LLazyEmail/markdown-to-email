import { newLine } from '../helpers';

const italic = () => '$1<em>$3</em>$4';

// const del = '<del>$1</del>';

const del = () => '<del>$1</del>';

// const q = '<q>$1</q>';

const q = () => '<q>$1</q>';

// const code = '<code>$1</code>';

const code = () => '<code>$1</code>';

// const hr = `${newLine}<hr />`;

const hr = () => `${newLine}<hr />`;

// const empty = '';

const empty = () => '';



export {

    italic,
    del,
    q,
    code,
    hr,
    empty
  };
  