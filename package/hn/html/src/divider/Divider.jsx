import React from 'react';

import Table from '../table';

import { styles } from './styles';

const Divider = ({ children }) => (
  <Table
    className="mcnDividerBlock"
    style={styles.dividerBlock}
  >
    <tbody className="mcnDividerBlockOuter">
      <tr>
        <td className="mcnDividerBlockInner" style={styles.dividerBlockInner}>
          <Table
            className="mcnDividerContent"
            width="100%"
            style={styles.dividerContent}
          >
            <tbody>
              <tr>
                <td style={styles.td} data-testid="dividerChildrenTest">
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

export default Divider;
