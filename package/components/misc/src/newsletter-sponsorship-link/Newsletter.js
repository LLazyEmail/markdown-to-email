import React from 'react';
import { styles } from './styles';

const config = {
  contact: 'https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech',
};

class NewsletterSponsorshipLink extends React.Component {
  render() {
    return 
        <div style={styles.center}>
            <br />
            <a href={config.contact} data-testid="newsletterHrefTest" target="_blank" style={styles.news}>
            Click Here To Sponsor A Newsletter by Hacker Noon
            </a>
        </div>;
  }
}

export default NewsletterSponsorshipLink;
