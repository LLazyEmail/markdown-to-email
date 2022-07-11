// When you use this function you can specify which types of objects you want to debug

function debuggingReplacer(name) {
    const namesArr = [
      // 'sponsorship',
      // 'paragraph',
      //  'link',
      //-------
  
       'header', // not working
         'title', 
         'subtitle', 
         'heading',
  
      // ----------------
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

  
  export default debuggingReplacer;