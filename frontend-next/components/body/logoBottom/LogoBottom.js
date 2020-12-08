import React from 'react';
import Table from '../../html/table';
import { styles } from './styles';

// @TODO moveout path to hackernoon logo into config array

const LogoBottom = () => (
  <Table
    className="mcnImageBlock"
    style={styles.imageBlock}
  >
    <tbody className="mcnImageBlockOuter">
      <tr>
        <td valign="top" style={styles.imageBlockInner} className="mcnImageBlockInner">
          <Table
            align="left"
            className="mcnImageContentContainer"
            style={styles.imageContentContainer}
          >
            <tbody>
              <tr>
                <td className="mcnImageContent" valign="top" style={styles.imageContent}>
                  <a href="https://hackernoon.com/" title className target="_blank" style={styles.title}>
                    <img
                      align="center"
                      alt=""
                      src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png"
                      width={564}
                      style={styles.img}
                      className="mcnImage"
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
);

export default LogoBottom;
