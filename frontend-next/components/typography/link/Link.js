import React from 'react';
import { styles } from './styles';

const Link = ({ href, children }) => (
  <a href={href} target="_blank" style={styles.link} data-testid="linkPropsTest">
    {children}
  </a>
);

export default Link;
