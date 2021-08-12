import React from 'react';

const List = ({ children }) => (
  <ul dir="ltr" data-testid="listProsChildrenTest">
    {children}
  </ul>
);

export default List;
