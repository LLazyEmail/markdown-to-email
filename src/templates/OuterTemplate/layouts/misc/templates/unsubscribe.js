import { config } from '../config';

const unsubscribe = `<a href="${config.unsubscribe}"
style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
unsubscribe
</a>`;

const unsubscribeComponent = (unsubscribeArg) => {
  // eslint-disable-next-line no-new
  if (!unsubscribeArg) new Error('invalid unsubscribe');

  return `<a href="${unsubscribeArg}"
    style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
    unsubscribe
    </a>`;
};

export { unsubscribe, unsubscribeComponent };
