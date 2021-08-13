import React from 'react';
import { styles } from './styles';

const PreviewText = ({ children }) => (
  <span className="mcnPreviewText" style={styles.previewText}>
    {children}
  </span>
);

export default PreviewText;
