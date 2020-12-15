import React from 'react';
import { styles } from './styles';

const ListItem = ({ children }) => (
  <li style={styles.li}>
    {/* was <p></p> */}
    <div dir="ltr" role="presentation" style={styles.presentation} data-testid="listItemTest">
      {children}
    </div>
  </li>
);

export default ListItem;
