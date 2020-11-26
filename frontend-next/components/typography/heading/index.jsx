import React from 'react';
import styles from './styles';

export default function Heading(props) {
  return (
    <h3 className="mc-toc-title" dir="ltr" style={styles.title}>
      <span style={styles.spanFont}>
        <span style={styles.spanSize} data-testid="headingChildrenTest">
          {props.children}
        </span>
      </span>
    </h3>
  );
}
