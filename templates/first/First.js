import React from 'react';

import Logo from 'components/body/logo';
import Divider from 'components/body/divider';

import HOC from './HOC';
import Footer from './Footer';
import BodyPrototype from './Body/BodyPrototype';


//---
import { Address, AnExample } from 'atherdon-react-markdown-component-misc';


import config from './config';
import { styles } from './styles';

const First = ({ header }) => (
  <HOC styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
          <Logo />

          <Address />
          <AnExample name="Sharade" />
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateHeader" style={styles.templateHeader} data-testid="bodyPropsTest">
          {header}
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
            <BodyPrototype
              config={config}
            />
          </Divider>
          <Logo />
        </td>
      </tr>
    </tbody>
    <Footer />
  </HOC>
);

export default First;
