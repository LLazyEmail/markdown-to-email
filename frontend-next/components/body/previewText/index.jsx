import React from 'react';
import styles from './styles';

export default function PreviewText(props) {
  return (
    <span className="mcnPreviewText" style={styles.previewText}>
      {props.children}
    </span>
  );
}
