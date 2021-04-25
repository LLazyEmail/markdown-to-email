import React from 'react';
import Copyrights from '../../../components/misc/copyrights';
import Address from '../../../components/misc/address';
import Unsubscribe from '../../../components/misc/unsubscribe';
import NewsletterSponsorshipLink from '../../../components/misc/newsletter-sponsorship-link';
import TableLeft from '../../../components/footer/tableLeft';
import { styles } from './styles';
import Table from '../../../components/html/table';

const Footer = () => (
  <>
    <Table
      className="mcnFollowBlock"
      style={styles.followBlock}
    >
      <tbody className="mcnFollowBlockOuter">
        <tr>
          <td align="center" valign="top" style={styles.followBlockInner} className="mcnFollowBlockInner">

            <Table
              className="mcnFollowContentContainer"
              style={styles.followContentContainer}
            >
              <tbody>
                <tr>
                  <td align="center" style={styles.tdCenter}>
                    <Table
                      style={styles.followContent}
                      className="mcnFollowContent"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top" style={styles.tdCenterTop}>
                            <Table
                              align="center"
                              style={styles.tableCenter}
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" style={styles.tdCenterTop2}>
                                    <TableLeft
                                      href="https://twitter.com/hackernoon"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/twitter.png"
                                      alt="Twitter"
                                    />
                                    <TableLeft
                                      href="https://www.facebook.com/hackernoon"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/facebook.png"
                                      alt="Facebook"
                                    />
                                    <TableLeft
                                      href="https://instagram.com/hackernoon/"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/instagram.png"
                                      alt="Instagram"
                                    />
                                    <TableLeft
                                      href="http://hackernoon.com"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/link.png"
                                      alt="Website"
                                    />
                                    <TableLeft
                                      href="https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/youtube.png"
                                      alt="YouTube"
                                    />
                                    <TableLeft
                                      href="mailto:stories@hackernoon.com"
                                      src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/forwardtofriend.png"
                                      alt="Email"
                                    />
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
          </td>
        </tr>
      </tbody>
    </Table>
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
                  <td valign="top" className="mcnTextContent" style={styles.textContent}>
                    <Copyrights />
                    <br />
                    <Address />
                    <br />
                    <Unsubscribe />
                    <NewsletterSponsorshipLink />
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
  </>
);

export default Footer;
