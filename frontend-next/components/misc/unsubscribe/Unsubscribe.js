import React from 'react';
import styles from './styles';

const Unsubscribe = ({ hrefUnsub }) => {
  return (
    <a href={hrefUnsub} style={styles.unsubscribe} dataTestid="unsubscribeTest">
      unsubscribe
    </a>
  );
}

export default Unsubscribe;