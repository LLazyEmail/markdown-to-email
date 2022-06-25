import { config } from '../config';

const newsletterSponsorshipLink = `<div style="text-align: center;">
<br>
<a href="${config.contact}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
  Click Here To Sponsor A Newsletter by Hacker Noon
</a>
</div>`;

const newsletterSponsorshipLinkComponent = (contact) => {
  return `<div style="text-align: center;">
  <br>
  <a href="${contact}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">
    Click Here To Sponsor A Newsletter by Hacker Noon
  </a>
  </div>`;
};

export { newsletterSponsorshipLink, newsletterSponsorshipLinkComponent };
