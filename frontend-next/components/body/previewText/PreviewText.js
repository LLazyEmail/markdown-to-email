import React from 'react';
import { styles } from './styles';

const PreviewText = ({children}) => {
  return (
    <span className="mcnPreviewText" style={styles.previewText}>
      {children}
    </span>
  );
}

export default PreviewText;