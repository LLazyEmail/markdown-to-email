class Replace {
    constructor() {
      this.replaceMDBinded = () => {};
  
      this.methods = [
        { name: 'strong', type: 'replace', arg: 'strong' },
        { name: 'em', type: 'replace', arg: 'italic' },
        { name: 'italicAsterix', type: 'replace', arg: 'italic_asterix' },
        { name: 'header', type: 'template', arg: 'header' },
        { name: 'subtitle', type: 'typography', arg: 'header' },
        { name: 'title', type: 'typography', arg: 'header' },
        { name: 'image', type: 'replace', arg: 'image' },
        { name: 'link', type: 'replace', arg: 'link' },
        { name: 'del', type: 'replace', arg: 'del' },
        { name: 'q', type: 'replace', arg: 'q' },
        { name: 'code', type: 'replace', arg: 'code' },
        { name: 'ul', type: 'replace', arg: 'ulList' },
        { name: 'ol', type: 'replace', arg: 'olList' },
        { name: 'blockquote', type: 'replace', arg: 'blockquote' },
        { name: 'hr', type: 'replace', arg: 'hr' },
        { name: 'paragraph', type: 'replace', arg: 'paragraph' },
        { name: 'br', type: 'replace', arg: 'br' },
        { name: 'previewText', type: 'miscellaneous', arg: 'previewText' },
        { name: 'sponsorship', type: 'miscellaneous', arg: 'sponsorship' },
        { name: 'memes', type: 'miscellaneous', arg: 'memes' },
        { name: 'separator', type: 'miscellaneous', arg: 'separator' },
      ];
    }
  
    configure(state) {
      this.replaceMDBinded = replaceMarkdown.bind(state);
  
      this.methods.forEach(({ name }) => {
        if (typeof this[name] === 'function') {
          this[name]();
        }
      });
    }
  
    miscellaneous() {
      this.br();
      this.sponsorship();
      this.memes();
      this.separator();
    }
  
    template() {
      this.header();
    }
  
    typography() {
      this.methods.forEach(({ type, name, arg }) => {
        if (type === 'typography' && name !== 'subtitle' && name !== 'title') {
          this.replaceMDBinded(arg);
        }
      });
  
      this.subtitle();
      this.title();
      this.header();
    }
  
    replace() {
      this.methods.forEach(({ type, name, arg }) => {
        if (type === 'replace' && typeof this[name] === 'function') {
          this[name]();
        }
      });
    }
  }
  
  export default new Replace();



const methodsList = [
    { name: 'header', type: 'template', arg: 'header' },
    { name: 'subtitle', type: 'typography', arg: 'header' },
    { name: 'title', type: 'typography', arg: 'header' },
    // ------------
    { name: 'strong', type: 'replace', arg: 'strong' },
    { name: 'em', type: 'replace', arg: 'italic' },
    { name: 'italicAsterix', type: 'replace', arg: 'italic_asterix' },
    // ------------
    { name: 'image', type: 'replace', arg: 'image' },
    { name: 'link', type: 'replace', arg: 'link' },
    { name: 'del', type: 'replace', arg: 'del' },
    { name: 'q', type: 'replace', arg: 'q' },
    { name: 'code', type: 'replace', arg: 'code' },
    { name: 'ul', type: 'replace', arg: 'ulList' },
    { name: 'ol', type: 'replace', arg: 'olList' },
    { name: 'blockquote', type: 'replace', arg: 'blockquote' },
    { name: 'hr', type: 'replace', arg: 'hr' },
    { name: 'paragraph', type: 'replace', arg: 'paragraph' },
    { name: 'br', type: 'replace', arg: 'br' },
    // ------------
    { name: 'previewText', type: 'miscellaneous', arg: 'previewText' },
    { name: 'sponsorship', type: 'miscellaneous', arg: 'sponsorship' },
    { name: 'memes', type: 'miscellaneous', arg: 'memes' },
    { name: 'separator', type: 'miscellaneous', arg: 'separator' },
  ];


  class Replacer {
    constructor() {
      this.replaceMDBinded = () => {};
  
      // Define methods as an empty array initially
      this.methods = [];
    }
  
    configure(state) {
      this.replaceMDBinded = replaceMarkdown.bind(state);
  
      // Call miscellaneous, template, and typography methods
      this.miscellaneous();
      this.template();
      this.typography();
    }
  
    // Define miscellaneous, template, and typography methods as abstract methods
    miscellaneous() {
      throw new Error("Method 'miscellaneous' must be implemented.");
    }
  
    template() {
      throw new Error("Method 'template' must be implemented.");
    }
  
    typography() {
      throw new Error("Method 'typography' must be implemented.");
    }
  
    // Add a method to add more methods to the class
    addMethods(newMethods) {
      this.methods.push(...newMethods);
    }
  
    // Call methods added through addMethods
    runMethods() {
      for (const method of this.methods) {
        this[method]();
      }
    }

}

export default Replacer;