const React = require('react');
const config = {
  contact: "https://sponsor.hackernoon.com/contact"
}

const styles = require('./styles');

const NewsletterSponsorshipLink = () => {
  return (
      <div style={styles.center}>
        <br/>
          <a href={config.contact} target="_blank" style={styles.news}>
            Click Here To Sponsor A Newsletter by Hacker Noon
          </a>
      </div>
  );
}

module.exports = NewsletterSponsorshipLink;
