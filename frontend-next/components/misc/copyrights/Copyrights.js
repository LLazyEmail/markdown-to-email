import React from 'react';

const Copyright = () => (
  <em data-testid="copyTest">
    Copyright ©
    {new Date().getFullYear()}
    {' '}
    Hacker Noon. All rights reserved.
  </em>
);

export default Copyright;
