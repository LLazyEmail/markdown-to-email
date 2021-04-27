import React from 'react';

// import Body from 'components/body';

import BodyPrototype from './Body/BodyPrototype';

import Divider from 'components/body/divider';
import Image from 'components/typography/image';
import Heading from 'components/typography/heading';
import Strong from 'components/typography/strong';
import Sponsor from 'components/body/sponsor';
import MainTitle from 'components/typography/mainTitle';
import Paragraph from 'components/typography/paragraph';

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
