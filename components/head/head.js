import React from 'react';

import Fonts from './fonts';

import { headStyles } from 'atherdon-react-markdown-component-misc';



const Head = ({ title }) => (
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <style>
      {headStyles}
    </style>
    <Fonts />
  </head>
);

export default Head;
