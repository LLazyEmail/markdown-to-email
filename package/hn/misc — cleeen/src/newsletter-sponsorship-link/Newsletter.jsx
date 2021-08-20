import React from 'react';
import { styles } from './styles';
import { config } from './config';

const NewsletterSponsorshipLink = () => (
  <div style={styles.center}>
    <br />
    <a href={config.contact} data-testid="newsletterHrefTest" target="_blank" style={styles.news}>
      Click Here To Sponsor A Newsletter by Hacker Noon
    </a>
  </div>
);

export default NewsletterSponsorshipLink;
