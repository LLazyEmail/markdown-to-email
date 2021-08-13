import React from 'react';
import { styles } from './styles';
import { link } from './config';

const JoinUs = () => (
  <div dir="ltr" style={styles.div}>
    <span style={styles.span1}>
      <span style={styles.span2}>
        <a href={link}
          style={styles.a}
          target="_blank">&quot;Join our writing contest and get a chance to win cool prizes&quot;.</a>
      </span>
    </span>
  </div>
);

export default JoinUs;