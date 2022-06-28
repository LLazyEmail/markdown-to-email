// TODO remove unused `text` argument
export function _image(text, alt, srcWithTooltip) {
  // eslint-disable-next-line no-useless-escape
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const params = {
    src: src.trim(),
    altText: alt,
  };

  const config = {
    // src: src.trim(),
    // altText: alt,
    params,
    name: 'image',
    debug: true,
  };

  // i dont think it will work well
  // eslint-disable-next-line no-plusplus
  this.warnings.images++;

  const replaced = replaceWrapper('image', config);

  // return replaced;

  try {
    const replaced = replacerParagraph(config);

    return newLine + replaced + newLine;
  } catch (error) {
    catch_error_trace_output(error);
  }
}

export default _image;
