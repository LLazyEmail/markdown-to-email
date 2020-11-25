import React from 'react';
import styles from './styles';

export default function Link(props) {
  return (
    <a href={props.href} target="_blank" style={styles.link} data-testid="linkPropsTest">
      {props.children}
    </a>
  );
}
