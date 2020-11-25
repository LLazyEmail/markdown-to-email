import React from 'react';

const List = ({children}) => {
  return (
    <ul dir="ltr" data-testid="listProsChildrenTest">
      {children}
    </ul>
  );
}

export default List;