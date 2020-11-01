
function image(text, alt, src) {
  // @TODO OMG, it's huuuge
  const parsedSrc = src.trim().match(/^(?<src>(.*?))\s?((?<quote>")(?<tooltip>.*?)\k<quote>)?$/) || [];

// something going on here... @TODO
  if (parsedSrc && parsedSrc.groups && parsedSrc.groups.src) {
    return readFile('typography/image')
      .replace('{src}', parsedSrc.groups.src)
      .replace('{altText}', alt)
  }

  return readFile('typography/image')
    .replace('{src}', '')
    .replace('{altText}', alt)
}
