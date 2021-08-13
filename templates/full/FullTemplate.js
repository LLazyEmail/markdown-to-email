import React from 'react';

// import Logo from 'components/body/logo';
import BodyPrototype from './Body/BodyPrototype';
// import Divider from 'components/body/divider';

import { Logo } from "atherdon-react-markdown-component-body"
import { Divider }  from "atherdon-react-markdown-component-body"

import HOC from './HOC';
import Footer from './Footer';
import config from './config';
import { styles } from './styles';

const FullTemplate = ({ header }) => (
  <HOC styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
          <Logo />
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

export default FullTemplate;
