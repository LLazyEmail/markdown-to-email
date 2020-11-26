import React from 'react';
import { styles } from './styles';

const SubTitle = ({children}) => {
  return (
    <p dir="ltr" style={styles.ltr}>
      <span style={styles.spanFont}>
        <span style={styles.spanSize}>
          <strong id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2" data-testid="subtitleChildrenTest">
            {children}
          </strong>
        </span>
      </span>
    </p>
  );
}

export default SubTitle;