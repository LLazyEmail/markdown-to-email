import React from 'react';
import { styles } from './styles';

// @TODO replace strong with component?

const SubTitle = ({ children }) => (
  <div dir="ltr" style={styles.ltr}>
    {/* было <p> исправил на div, т.к выдавало ошибку */}
    <span style={styles.spanFont}>
      <span style={styles.spanSize}>
        <strong data-testid="subtitleChildrenTest">
          {children}
        </strong>
      </span>
    </span>
  </div>
);

export default SubTitle;
