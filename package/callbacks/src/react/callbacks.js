import { replaceReactWrapper, newLine } from '../helpers';

/// function is not working as planned

function paragraphWrapper(text, line) {
  const trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    // @TODO move out this regex into constants file.
    return newLine + line + newLine;
  }

  const config = {
    content: trimmed,
  };


  const replaced = replaceReactWrapper(
    'paragraph', 
    config
  );

  const result = newLine + replaced + newLine;
  // console.log(config);

  return result;
}
/// !end function is not working as planned

function image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const config = {
    src: src.trim(),
    altText: alt,
  };

  // not sure if it will work fine
  this.warnings.images++;



  const replaced = replaceReactWrapper(
    'image', 
    config
  );

  
  return replaced;
}

function br(text, newLines) {
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));

  // @TODO well, it's not good. can be improved with lodash
  // @TODO I REALLY HATE THIS LINE
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current), '',
  );

  return result;
}

function sponsorship(text) {
  const regex = /\[(.*?)\]/g;
  const regex2 = /[\[\]]/g;

  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(regex2, ''));

  const config = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),

    folder: 'body'
  };

  // @TODO nope, not good
  this.errors.sponsorshipTop
    ? (this.errors.sponsorshipBottom = true)
    : (this.errors.sponsorshipTop = true);


    const replaced = replaceReactWrapper(
      'sponsor', 
      config,
      'body'
    );  

    return replaced;
}

// function tag_loop(){
//     var arr = {
//         header,
//         content,
//         footer,
//        social,
//         unsub
//     }
//     var completed_HTML = '';
//     _.each(arr,{

//         completed_HTML += element;

//     });
// }

export {
  paragraphWrapper,
  image,
  sponsorship,
  br,
  newLine
};
