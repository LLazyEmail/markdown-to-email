/* eslint-disable */
import { newLine } from '../../domain/helper-methods';
import { commonReplace } from '../../domain/replace-wrapper3.0'

function _header(text, chars, content) {
    const params = {
      content: content.trim(),
    };
  
    const titleType = ['mainTitle', 'subtitle', 'heading'];
    const name = titleTypes[chars.length - 1];
  
     const config = {
      params,
      name,
  
      // debug: true,
    };
  
    const replaced = commonReplace(config);
    return newLine + replaced;
  
  }

export default _header;