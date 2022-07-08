import { newLine } from '../helpers';

const _italic = () => '$1<em>$3</em>$4';

const _del = () => '<del>$1</del>';

const _q = () => '<q>$1</q>';

const _code = () => '<code>$1</code>';

const _hr = () => `${newLine}<hr />`;

const _empty = () => '';

export { _italic, _del, _q, _code, _hr, _empty };
