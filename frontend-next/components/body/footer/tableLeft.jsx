import React from 'react';
import styles from './styles';

export default function TableLeft(props) {
  return (
    <table align="left" border={0} cellPadding={0} cellSpacing={0} style={styles.tableLeft}>
      <tbody>
        <tr>
          <td valign="top" style={styles.followContentItemContainer} className="mcnFollowContentItemContainer">
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width="100%"
              className="mcnFollowContentItem"
              style={styles.followContentItem}
            >
              <tbody>
                <tr>
                  <td align="left" valign="middle" style={styles.tdLeftMiddle}>
                    <table
                      align="left"
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      width
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
                            <a href={props.href} target="_blank" style={styles.followSocial} data-testid="tableLeftHrefTest">
                              <img
                                src={props.src}
                                alt={props.alt}
                                style={styles.followSocialImg}
                                height={24}
                                width={24}
                                className
                                data-testid="tableLeftImgTest"
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
