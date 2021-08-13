import React from 'react';
import Table from '../table';
import { styles } from './styles';

const Sponsor = ({
  leftHref, leftSrc, rightHref, children,
}) => (
  <Table
    className="mcnImageCardRightContentOuter"
    width="100%"
    style={styles.imageCardRightContentOuter}
  >
    <tbody>
      <tr>
        <td align="center" valign="top" className="mcnImageCardRightContentInner" style={styles.imageCardRightContentInner}>
          <Table
            align="left"
            className="mcnImageCardRightImageContentContainer"
            width={200}
            style={styles.imageCardRightContentContainer}
          >
            <tbody>
              <tr>
                <td className="mcnImageCardRightImageContent" align="center" valign="top" style={styles.imageCardRightContent}>
                  <a href={leftHref} data-testid="sponsorHrefTest" title='' className='' target="_blank" style={styles.title}>
                    <img alt="" src={leftSrc} width={150} data-testid="sponsorSrcTest" style={styles.image} className="mcnImage" />
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            className="mcnImageCardRightTextContentContainer"
            align="right"
            width={346}
            style={styles.imageCardRightContentContainer}
          >
            <tbody>
              <tr>
                <td valign="top" className="mcnTextContent" style={styles.textContent}>
                  <h1 className="mc-toc-title" style={styles.docTitle}>
                    <br />
                    <a href={rightHref} style={styles.link}>
                      <strong data-testid="sponsorChildrenTest">
                        {children}
                      </strong>
                    </a>
                  </h1>
                </td>
              </tr>
            </tbody>
          </Table>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default Sponsor;
