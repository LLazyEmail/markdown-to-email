import React from 'react';
import { styles } from './styles';

const Sponsor = ({leftHref, leftSrc, rightHref, children}) => {
  return (
    <table border={0} cellPadding={0} cellSpacing={0} className="mcnImageCardRightContentOuter" width="100%" style={styles.imageCardRightContentOuter}>
      <tbody>
        <tr>
          <td align="center" valign="top" className="mcnImageCardRightContentInner" style={styles.imageCardRightContentInner}>
            <table align="left" border={0} cellPadding={0} cellSpacing={0} className="mcnImageCardRightImageContentContainer" width={200} style={styles.imageCardRightContentContainer}>
              <tbody>
                <tr>
                  <td className="mcnImageCardRightImageContent" align="center" valign="top" style={styles.imageCardRightContent}>
                    <a href={leftHref} data-testid="sponsorHrefTest" title className target="_blank" style={styles.title}>
                      <img alt="" src={leftSrc} width={150} data-testid="sponsorSrcTest" style={styles.image} className="mcnImage" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="mcnImageCardRightTextContentContainer" align="right" border={0} cellPadding={0} cellSpacing={0} width={346} style={styles.imageCardRightContentContainer}>
              <tbody>
                <tr>
                  <td valign="top" className="mcnTextContent" style={styles.textContent}>
                    <h1 className="mc-toc-title" style={styles.docTitle}>
                      <br />
                      <a href={rightHref} style={styles.link}>
                        <strong id="docs-internal-guid-98b2620b-7fff-d936-82b8-a8d3a3d3c470" data-testid="sponsorChildrenTest">
                          {children}
                        </strong>
                      </a>
                    </h1>
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

export default Sponsor;
