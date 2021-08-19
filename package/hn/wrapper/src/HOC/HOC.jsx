import React from 'react';
import Table from "../Table/Table.jsx";

const HOC = ({ children, styles }) => (
  <>
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
                {children}
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </>
);

export default HOC;
