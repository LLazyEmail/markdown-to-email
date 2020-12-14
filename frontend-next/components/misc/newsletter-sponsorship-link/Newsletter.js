import React from 'react';
import { styles } from './styles';

const config = {
  contact: 'https://sponsor.hackernoon.com/contact',
};

const NewsletterSponsorshipLink = () => (
  <div style={styles.center}>
    <br />
    <a href={config.contact} data-testid="newslatterHrefTest" target="_blank" style={styles.news}>
      Click Here To Sponsor A Newsletter by Hacker Noon
    </a>
  </div>
);

export default NewsletterSponsorshipLink;
