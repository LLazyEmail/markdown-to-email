import { newLine } from '../helpers';
// import { commonReplace } from '../../../domain/replace-wrapper3.0';

const _del = () => '<del>$1</del>';

const _q = () => '<q>$1</q>';

const _code = () => '<code>$1</code>';

const _hr = () => `${newLine}<hr />`;

const _empty = () => '';

export { _del, _q, _code, _hr, _empty };
