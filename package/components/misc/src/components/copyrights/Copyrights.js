import React from 'react';

class Copyright extends React.Component {
  render() {
    return 
        <em data-testid="copyTest">
            Copyright ©
            {new Date().getFullYear()}
            {' '}
            Hacker Noon. All rights reserved.
        </em>;
  }
}

export default Copyright;
