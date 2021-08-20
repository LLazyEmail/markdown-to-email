import React from 'react';
import { styles } from './styles';

const Unsubscribe = ({ hrefUnsub }) => (
  <a href={hrefUnsub} style={styles.unsubscribe} data-testid="unsubscribeTest">
    unsubscribe
  </a>
);

export default Unsubscribe;
