import os from 'os';

const platform = os.platform();

const newLine = platform === 'win32' ? '\r\n' : '\n';

const REGEXP_SECTION_TAGS = /^<\/?(ul|ol|li|h|p|bl)/i;
// eslint-disable-next-line no-useless-escape
const REGEXP_IMAGE_TOOLTIP = /\"image_tooltip\"/;
const REGEXP_NEWLINE = `${newLine}g`;

// const REGEXP_SPONSORHSHIP =

// command-line-methods.js
// const REGEXP_BASIC_TABLE_TAGS = new RegExp('(<table|<tr>|<td|<tbody>)', 'i');

export default {
  REGEXP_SECTION_TAGS,
  REGEXP_IMAGE_TOOLTIP,
  REGEXP_NEWLINE,
};
