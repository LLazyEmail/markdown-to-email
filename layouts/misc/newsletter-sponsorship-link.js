const React = require('react');
const config = {
  contact: "https://sponsor.hackernoon.com/contact"
}

const NewsStyles = {
  'mso-line-height-rule': 'exactly',
  '-ms-text-size-adjust': '100%',
  '-webkit-text-size-adjust': '100%',
  'color': '#656565',
  'font-weight': 'normal',
  'text-decoration': 'underline'
}

const NewsletterSponsorshipLink = () => {
  return (
      <div style="text-align: center;">
        <br/>
          <a href={config.contact} target="_blank" style={NewsStyles}>
            Click Here To Sponsor A Newsletter by Hacker Noon
          </a>
      </div>
  );
}

module.exports = NewsletterSponsorshipLink;
