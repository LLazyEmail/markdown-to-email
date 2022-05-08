// TODO const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
// const checkingPreviewText = (previewText) => {
//   if (!previewText) {
//     throw new Error('`previewText` is a required option for `renderTemplate`');
//   }
// };

const previewTextComponent = (content) => {
  return `<!--[if !gte mso 9]><!---->
    ${content}
    <!--<![endif]-->`;
};

export default previewTextComponent;
