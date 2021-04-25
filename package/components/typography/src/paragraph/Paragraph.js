import React from 'react';
import { styles } from './styles';

const Paragraph = ({ children }) => (
  <div dir="ltr" style={styles.ltr}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize} data-testid="paragraphChildrenTest">
        {children}
      </span>
    </span>
  </div>
);

export default Paragraph;
