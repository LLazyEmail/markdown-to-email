function link(text, title, href) {
  // @TODO replace this shit
  return readFile('typography/link')
          .replace("{content}", title.trim())
          .replace("{href}", href.trim())
}

function paragraphWrapper(text, line) {
  debugger;
  var trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) { //@TODO move out this regex into constants file.
    return '\n' + line + '\n';
  }

  // var htmlBlock = readFile('typography/paragraph').replace('{content}', trimmed) + '\n FUCK YOU \n';
  // return htmlBlock;
  return readFile('typography/paragraph').replace('{content}', trimmed);
}



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



function sponsorship(text){
  const regex = /\[(.*?)\]/g;
  const [ src, href, content ] = text.match(regex).map(match => match.replace(/[\[\]]/g, ''));

  return readFile('body/promo')
            .replace('{src}', src)
            .replace('{href}', href)
            .replace('{content}', content)
}

