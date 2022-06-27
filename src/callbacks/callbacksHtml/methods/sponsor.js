import { replaceWrapper,  } from '../helpers';


import { repSponsor } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'
// /domain/error-handle/index';
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
  
  const params = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),
  }


    const config = {
  
      params,

      // we will be able to remove it when we find a way to do it.
      // folder: 'body',


      name: 'sponsorship',





      debug: true
    };
  
    // TODO upgrade a way to handle errors in state object
    // eslint-disable-next-line no-unused-expressions
    this.errors.sponsorshipTop
      ? (this.errors.sponsorshipBottom = true)
      : (this.errors.sponsorshipTop = true);
  
  
  
  

    // ITS IMPORTANT TO BE ABLE TO FIND A WAY TO GENERATE AN ERROR AND PASS IT TO THE PREV CALLER.

  try {
  
    const replaced = repSponsor(config);
        
    // console.log(replaced);
  
    return replaced;

    // or 

    
    // const newString = replaceWrapper2(config);
    // console.log(newString);

  } catch (error) {
    
    catch_error_trace_output(error);
    
  }


  
  
    
  }
  
  // export default _sponsorship