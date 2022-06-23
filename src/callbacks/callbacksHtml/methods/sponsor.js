

// TODO remove unused `text` argument
export function _sponsorship(text) {


    // TODO move out this regex into constants file.
    const regex = /\[(.*?)\]/g;
  
  
    const regex2 = /[\[\]]/g; 
  
  
    const [content, href, src] = text
      .match(regex)
      // eslint-disable-next-line no-useless-escape
      .map((match) => match.replace(regex2, '')); // TODO move out this regex into constants file.
  
    const config = {
      src: src.trim(),
      href: href.trim(),
      content: content.trim(),
  
      folder: 'body',
    };
  
    // @TODO nope, not good
    // eslint-disable-next-line no-unused-expressions
    this.errors.sponsorshipTop
      ? (this.errors.sponsorshipBottom = true)
      : (this.errors.sponsorshipTop = true);
  
  
  
  
  
  
    const replaced = replaceWrapper(
      'sponsor', config
      );
  
    console.log(replaced);
  
  
    return replaced;
  }
  
  // export default _sponsorship