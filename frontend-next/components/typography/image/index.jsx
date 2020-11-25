import React from 'react';
import styles from './styles';

export default function Image(props) {
  return (
    <p dir="ltr" style={styles.ltr}>
      <span style={styles.spanFont}>
        <span style={styles.spanSize}>
          <a href={props.href} target="_blank" style={styles.link}>
            <img data-file-id={1041068} src={props.src} style={styles.img} alt={props.alt} data-testid="imagePropsTest" />
          </a>
        </span>
      </span>
    </p>
  );
}

module.exports = Image;
