import React from 'react';
import { styles } from './styles';
import LogoTop from './logoTop';
import LogoBottom from './logoBottom';
import Divider from './divider';
import Footer from '../footer';

const Body = ({ header, children }) => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <table
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        id="bodyTable"
        style={styles.bodyTable}
      >
        <tbody>
          <tr>
            <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>

              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="templateContainer"
                style={styles.templateContainer}
              >
                <tbody>
                  <tr>
                      <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
                        <LogoTop />
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
                          {children}
                        </Divider>
                        <LogoBottom />
                      </td>
                    </tr>
                </tbody>
              </table>
              <Footer />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Body;
