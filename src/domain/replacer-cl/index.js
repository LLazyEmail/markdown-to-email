// //------------------


// class Replace {
//     constructor() {
//       this.replaceMDBinded = () => {};
//       // this.replaceMDBindedPreviewText = () => {};
  
//       this.previewText = function () {
//         this.replaceMDBinded('previewText');
//       };
  
//       // this.comments = () => {
//       //   // HEEEEEEYY
//       //   this.replaceMDBinded('');
//       // };
  
//       this.strong = () => {
//         this.replaceMDBinded('strong');
//       };
  
//       this.em = () => {
//         this.replaceMDBinded('italic');
//       };
  
//       this.header = () => {
//         this.replaceMDBinded('header');
//       };
  
//       this.image = () => {
//         this.replaceMDBinded('image');
//       };
  
//       this.link = () => {
//         this.replaceMDBinded('link');
//       };
  
//       this.del = () => {
//         this.replaceMDBinded('del');
//       };
  
//       this.q = () => {
//         this.replaceMDBinded('q');
//       };
  
//       this.code = () => {
//         this.replaceMDBinded('code');
//       };
  
//       this.ul = () => {
//         this.replaceMDBinded('ulList');
//       };
  
//       this.ol = () => {
//         this.replaceMDBinded('olList');
//       };
  
//       this.blockquote = () => {
//         this.replaceMDBinded('blockquote');
//       };
  
//       this.hr = () => {
//         this.replaceMDBinded('hr');
//       };
  
//       this.paragraph = () => {
//         this.replaceMDBinded('paragraph');
//       };
//       //---------------------
//       this.emptyUl = () => {
//         this.replaceMDBinded('REGEXP_EMPTY_UL');
//       };
  
//       this.emptyOl = () => {
//         this.replaceMDBinded('REGEXP_EMPTY_OL');
//       };
  
//       this.emptyBlockquote = () => {
//         // this line is generating an error
//         // this.replaceMDBinded(this._constants.REGEXP_EMPTY_BLOCKQUOTE, newLine);
//         this.replaceMDBinded('REGEXP_EMPTY_BLOCKQUOTE');
//       };
//       //---------------------
  
//       this.br = function () {
//         this.replaceMDBinded('br');
//       };
  
//       this.sponsorship = function () {
//         this.replaceMDBinded('sponsorship');
//       };
  
//       // here we have a different name
//       this.memes = function () {
//         this.replaceMDBinded('memes');
//       };
  
//       this.separator = function () {
//         this.replaceMDBinded('separator');
//       };
//     }
  
//     template() {
//       this.header();
//     }
  
//     // TODO I think we need to upgrade this class,
//     // in order to match it with our updated logic of organizing components
  
//     // test this part
//     miscellaneous() {
//       // this line is generating an error
//       // TODO fix this
//       // this.emptyBlockquote();
//       this.br();
  
//       if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
//         this.sponsorship();
//       }
  
//       this.memes();
//       this.separator();
//     }
  
//     typography() {
//       this.strong();
//       this.em();
  
//       // this.header();
  
//       this.image();
//       this.link();
//       this.del();
//       this.q();
//       this.code();
//       //-----
//       this.ul();
//       this.ol();
//       //-----
//       this.blockquote();
//       this.hr();
//       //-----
//       this.paragraph();
  
  
//       // TODO fix this
//       // this.emptyUl();
//       // this.emptyOl();
//     }
  
  
//     runConfigure () {
      
//     }
  
//   }
  
//   export default new Replace();