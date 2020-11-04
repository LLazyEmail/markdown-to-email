const Copyrights = require("../../misc/copyrights");
const Address = require("../../misc/address");
const Unsubscribe = require("../../misc/unsubscribe");
const NewsletterSponsorshipLink = require("../../misc/newsletter-sponsorship-link");
const TableLeft = require("./tableLeft");
const styles = require("./styles");

const React = require('react');

const Footer = () => {
    return (
        <div>
            <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnFollowBlock" style={styles.followBlock}>
                <tbody className="mcnFollowBlockOuter">
                <tr>
                    <td align="center" valign="top" style={styles.followBlockInner} className="mcnFollowBlockInner">

                        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnFollowContentContainer" style={styles.followContentContainer}>
                            <tbody>
                            <tr>
                                <td align="center" style={styles.tdCenter}>
                                    <table border={0} cellPadding={0} cellSpacing={0} width="100%" style={styles.followContent} className="mcnFollowContent">
                                        <tbody>
                                        <tr>
                                            <td align="center" valign="top" style={styles.tdCenterTop}>
                                                <table align="center" border={0} cellPadding={0} cellSpacing={0} style={styles.tableCenter}>
                                                    <tbody>
                                                    <tr>
                                                        <td align="center" valign="top" style={styles.tdCenterTop2}>
                                                            <TableLeft
                                                                href={"https://twitter.com/hackernoon"}
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-twitter-48.png"}
                                                                alt={"Twitter"}
                                                            />
                                                            <TableLeft
                                                                href={"https://www.facebook.com/hackernoon"}
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-facebook-48.png"}
                                                                alt={"Facebook"}
                                                            />
                                                            <TableLeft
                                                                href={"https://instagram.com/hackernoon/"}
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-instagram-48.png"}
                                                                alt={"Instagram"}
                                                            />
                                                            <TableLeft
                                                                href={"http://hackernoon.com"}
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-link-48.png"}
                                                                alt={"Website"}
                                                            />
                                                            <TableLeft
                                                                href={"https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g"}
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-youtube-48.png"}
                                                                alt={"YouTube"}
                                                            />
                                                            <TableLeft
                                                                href={"mailto:stories@hackernoon.com" }
                                                                src={"https://cdn-images.mailchimp.com/icons/social-block-v2/gray-forwardtofriend-48.png"}
                                                                alt={"Email"}
                                                            />
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
                    </td>
                </tr>
                </tbody>
            </table>
            <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnTextBlock" style={styles.textBlock}>
                <tbody className="mcnTextBlockOuter">
                <tr>
                    <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
                        <table align="left" border={0} cellPadding={0} cellSpacing={0} style={styles.textContentContainer} width="100%" className="mcnTextContentContainer">
                            <tbody>
                            <tr>
                                <td valign="top" className="mcnTextContent" style={styles.textContent}>
                                            <Copyrights/>
                                                <br />
                                                <Address/>
                                                <br />
                                                <Unsubscribe/>
                                                <NewsletterSponsorshipLink/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}

module.exports = Footer;
