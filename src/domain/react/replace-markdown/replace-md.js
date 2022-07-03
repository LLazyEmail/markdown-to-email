import mapObject from './pre-replace-objects';

// TODO replace the name of this method
function prepOurCallback(callback_name) {
    if (!callback_name) {
      throw new Error(`name of ${callback_name} is undefined or empty`);
    }
  
    const settings = mapObject[callback_name];
    // console.log(settings)
    return settings;
}

// When you use this function you can specify which types of objects you want to debug
function debuggingReplacer(name) {
    const namesArr = [
      'sponsorship',
      // 'paragraph',
      // 'link',
      // 'header', // not working
      // 'strong',
      // 'memes',
      // 'br',
      // 'separator',
      // 'previewText',
      // 'italic',
      // 'olList'
      // 'ulList'
      // 'image'
  
    ];
    return namesArr.includes(name);
  }

  function replaceMarkdownReact(callback_name) {
    const fromMap = prepOurCallback(callback_name);

    const forReplacer = fromMap.replacer.bind(this);

    //-------------- Uncomment for debugging reasons
  // if (debuggingReplacer(callback_name)) {
  //   console.log(callback_name);

  //   this.content = this.content.replace(
  //     fromMap.constant, 
  //     forReplacer
  //   );
  // }
  // return '';
  //-----------------------

  //--- You can comment this when you debugging our wrapper
  this.content = this.content.replace(fromMap.constant, forReplacer);
  }

  export default replaceMarkdownReact;