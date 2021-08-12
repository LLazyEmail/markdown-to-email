import React from 'react';
import { styles } from './styles';

const Strong = ({ children }) => (
  <strong style={styles.strong} data-testid="strongChildrenTest">
    {children}
  </strong>
);

export default Strong;
