import React from 'react';
import { styles } from './styles';

// @TODO replace strong with component?

const SubTitle = ({ children }) => (
  <p dir="ltr" style={styles.ltr}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize}>
        <strong data-testid="subtitleChildrenTest">
          {children}
        </strong>
      </span>
    </span>
  </p>
);

export default SubTitle;
