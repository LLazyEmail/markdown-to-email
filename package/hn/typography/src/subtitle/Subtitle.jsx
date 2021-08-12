import React from 'react';
import Strong from '../strong';
import { styles } from './styles';

const SubTitle = ({ children }) => (
  <p dir="ltr" style={styles.ltr}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize}>
        <Strong>
          {children}
        </Strong>
      </span>
    </span>
  </p>
);

export default SubTitle;
