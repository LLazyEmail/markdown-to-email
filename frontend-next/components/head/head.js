import React from 'react';
import Fonts from './fonts';

// @TODO title should be passed from the outside

// @TODO should we handle <style> tag issue?

const Head = () => (
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>The Secrets of High-Performing DevOps teams</title>
    <style>
      {/* headStyles */}
    </style>
    <Fonts />
  </head>
);

export default Head;
