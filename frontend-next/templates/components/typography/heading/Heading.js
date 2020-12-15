import React from 'react';
import { styles } from './styles';

const Heading = ({ children }) => (
  <h3 className="mc-toc-title" dir="ltr" style={styles.title}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize} data-testid="headingChildrenTest">
        {children}
      </span>
    </span>
  </h3>
);

export default Heading;
