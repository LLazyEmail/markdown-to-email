
// TODO remove unused `text` argument
export function _image(text, alt, srcWithTooltip) {
    // eslint-disable-next-line no-useless-escape
    const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');
  
    const config = {
      src: src.trim(),
      altText: alt,
    };
  
    // i dont think it will work well
    // eslint-disable-next-line no-plusplus
    this.warnings.images++;
  
  
  
  
  
    const replaced = replaceWrapper('image', config);
  
    return replaced;
  }

  // export default _image