import React from 'react';
// import Table from '../../html/table';
import Table from "atherdon-react-markdown-component-body"

import { styles } from './styles';

const TableLeft = ({ href, src, alt }) => (
  <Table
    align="left"
    style={styles.tableLeft}
  >
    <tbody>
      <tr>
        <td valign="top" style={styles.followContentItemContainer} className="mcnFollowContentItemContainer">
          <Table
            className="mcnFollowContentItem"
            style={styles.followContentItem}
          >
            <tbody>
              <tr>
                <td align="left" valign="middle" style={styles.tdLeftMiddle}>
                  <Table
                    align="left"
                    style={styles.tableLeft2}
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          valign="middle"
                          width={24}
                          className="mcnFollowIconContent"
                          style={styles.followIconContent}
                        >
                          <a href={href} target="_blank" style={styles.followSocial} data-testid="tableLeftHrefTest">
                            <img
                              src={src}
                              alt={alt}
                              style={styles.followSocialImg}
                              height={24}
                              width={24}
                              className=''
                              data-testid="tableLeftImgTest"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default TableLeft;
