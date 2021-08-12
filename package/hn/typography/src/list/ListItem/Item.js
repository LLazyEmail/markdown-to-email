import React from 'react';
import styles from './styles';

const ListItem = ({ children }) => (
  <li style={styles.li}>
    <p dir="ltr" role="presentation" style={styles.presentation} data-testid="listItemTest">
      {children}
    </p>
  </li>
);

export default ListItem;
