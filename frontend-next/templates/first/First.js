import React from 'react';
import { styles } from './styles';
import Logo from '../components/body/logo';
import Footer from './Footer';
import BodyPrototype from './Body/BodyPrototype';
import Divider from '../components/body/divider';
import Table from '../components/html/table';

const App = ({ header }) => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <Table
        id="bodyTable"
        style={styles.bodyTable}
      >
        <tbody>
          <tr>
            <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>

              <Table
                className="templateContainer"
                style={styles.templateContainer}
              >
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
                        <BodyPrototype />
                      </Divider>
                      <Logo />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Footer />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

export default App;
