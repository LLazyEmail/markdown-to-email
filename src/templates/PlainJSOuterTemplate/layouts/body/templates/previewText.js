const previewText = `<span
class="mcnPreviewText"
style="
  display: none;
  font-size: 0px;
  line-height: 0px;
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  mso-hide: all;
"
>{content}</span>`;

const previewTextComponent = (content) => {
  // eslint-disable-next-line no-new
  if (!content) new Error('invalid previewText');

  return `<span
  class="mcnPreviewText"
  style="
    display: none;
    font-size: 0px;
    line-height: 0px;
    max-height: 0px;
    max-width: 0px;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    mso-hide: all;
  "
  >${content}</span>`;
};

export { previewText, previewTextComponent };
