import React from 'react';
import Table from '../../html/table';
import { styles } from './styles';
import config from './config';

const Logo = () => (
  <Table
    className="mcnImageBlock"
    style={styles.imageBlock}
  >
    <tbody className="mcnImageBlockOuter">
      <tr>
        <td valign="top" style={styles.imageContentContainer} className="mcnImageBlockInner">
          <Table
            align="left"
            className="mcnImageContentContainer"
            style={styles.imageContentContainer}
          >
            <tbody>
              <tr>
                <td className="mcnImageContent" valign="top" style={styles.imageContent}>
                  <a href={config.link} title='' className='' target="_blank" style={styles.title}>
                    <img
                      align="center"
                      alt=""
                      src={config.imgLink}
                      width={600}
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

export default Logo;
