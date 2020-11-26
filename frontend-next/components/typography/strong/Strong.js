import React from 'react';

const Strong = ({children}) => {
  return (
    <strong style={{ fontWeight: 'bolder' }} data-testid="strongChildrenTest">
      {children}
    </strong>
  );
}

export default Strong;