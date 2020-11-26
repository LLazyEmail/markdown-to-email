import React from 'react';
import { styles } from './styles';

const Image = ({href, src, alt}) => {
  return (
    <p dir="ltr" style={styles.ltr}>
      <span style={styles.spanFont}>
        <span style={styles.spanSize}>
          <a href={href} target="_blank" style={styles.link}>
            <img data-file-id={1041068} src={src} style={styles.img} alt={alt} data-testid="imagePropsTest" />
          </a>
        </span>
      </span>
    </p>
  );
}

export default Image;
