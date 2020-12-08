import React from 'react';
import { styles } from './styles';

const Section = ({ children }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="mcnTextBlock"
    style={styles.textBlock}
  >
    <tbody className="mcnTextBlockOuter">
      <tr>
        <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
          <table
            align="left"
            border={0}
            cellPadding={0}
            cellSpacing={0}
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
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Section;
