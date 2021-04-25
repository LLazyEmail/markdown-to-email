import React from 'react';
import { styles } from './styles';

const MainTitle = ({ children }) => (
  <h1 className="mc-toc-title" dir="ltr" style={styles.title}>
    <span style={styles.spanFont}>
      <span style={styles.spanSize} data-testid="mainTitleChildrenTest">
        {children}
      </span>
    </span>
  </h1>
);

export default MainTitle;
