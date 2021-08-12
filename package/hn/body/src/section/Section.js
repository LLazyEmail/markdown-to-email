import React from 'react';
import Table from '../../html/table';
import { styles } from './styles';

const Section = ({ children }) => (
  <Table
    className="mcnTextBlock"
    style={styles.textBlock}
  >
    <tbody className="mcnTextBlockOuter">
      <tr>
        <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
          <Table
            align="left"
            style={styles.textContentContainer}
            className="mcnTextContentContainer"
          >
            <tbody>
              <tr>
                <td
                  valign="top"
                  className="mcnTextContent"
                  label="sectionPropsChildren"
                  data-testid="sectionPropsChildren"
                  style={styles.textContent}
                >
                  {children}
                </td>
              </tr>
            </tbody>
          </Table>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default Section;
