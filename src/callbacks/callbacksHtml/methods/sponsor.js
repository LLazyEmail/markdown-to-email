import { replaceWrapper, repSponsor } from '../helpers';

// TODO I think text variable here is like a params or something, 
// because we spread it into 3 variables later
// we probably can rename it, cause it's very confusing
export function _sponsorship(text) {


    // TODO move out this regex into constants file.
    const regex = /\[(.*?)\]/g;
  
    // TODO move out this regex into constants file.
    const regex2 = /[\[\]]/g; 
  
  
    const [content, href, src] = text
      .match(regex)
      // eslint-disable-next-line no-useless-escape
      .map((match) => match.replace(regex2, '')); 
  
    const config = {
      src: src.trim(),
      href: href.trim(),
      content: content.trim(),
  



      folder: 'body',


      name: 'sponsor',





      debug: true
    };
  
    // @TODO nope, not good
    // eslint-disable-next-line no-unused-expressions
    this.errors.sponsorshipTop
      ? (this.errors.sponsorshipBottom = true)
      : (this.errors.sponsorshipTop = true);
  
  
  
    // const newString = replaceWrapper2(config);
    // console.log(newString);
  

    // ITS IMPORTANT TO BE ABLE TO FIND A WAY TO GENERATE AN ERROR AND PASS IT TO THE PREV CALLER.

    const replaced = repSponsor(
      'sponsor', config
      );
  
    console.log(replaced);
  
  
    return replaced;
  }
  
  // export default _sponsorship