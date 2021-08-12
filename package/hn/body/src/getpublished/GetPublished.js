import React from 'react';
import { styles } from './styles';
import { link1, link2 } from './config';

const GetPublished = () => (
  <div dir="ltr" style={styles.div}>
    <span style={styles.span1}>
      <span style={styles.span2}>
        <a href={link1}
          style={styles.a}
          target="_blank">Got a tech story to share with our readers?</a> Everything you&#39;ve ever wanted to know about how to get published on Hacker Noon - <a href={link2} style={styles.a} target="_blank">get it here</a>.
      </span>
    </span>
  </div>
);

export default GetPublished;