import { replaceWrapper, newLine } from '../helpers';




function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };

  const replaced = replaceWrapper(
    'strong', 
    config
  );

  
  return replaced;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };


  const replaced = replaceWrapper(
    'link', 
    config
  );
  
  return replaced;
}

function blockquote(text, tmp, item) {
  return `${newLine}<blockquote>${item.trim()}</blockquote>`;
}



// TODO remove unused `text` argument
function previewText(text, content) {
  const config = {
    content:content,
    folder: 'body'
  };



  this.errors.previewText = true;



  const replaced = replaceWrapper(
    'previewText', 
    config,
    'body'
  );

  return replaced;
}


function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };


  const replaced = replaceWrapper(
    'image', 
    config
  );
  
  return replaced;
}



function header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = [
    'title',
    'subtitle',
    'heading',
  ];

  const replaced = replaceWrapper(
    titleType[chars.length - 1], 
    config
  );
  
  const result = newLine + replaced;

  return result;
}



export {
  strong,
  link,
  blockquote,
  mem,
  header,
  previewText
};
