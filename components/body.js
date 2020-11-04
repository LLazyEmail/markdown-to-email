const React = require('react');

const styles = require('./styles');

const LogoTop = require('./body/logoTop');
const LogoBottom = require('./body/logoBottom');

const Divider = require('./body/divider');
const Content = require('./body/content');
const PreviewText = require('./body/previewText');

const Footer = require('./body/footer');

const Body = (props) => {
    return (
        <div>
            <PreviewText>
                Some Preview Text
            </PreviewText>
            <center>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} height="100%" width="100%" id="bodyTable" style={styles.bodyTable}>
                    <tbody><tr>
                        <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>
                            <Footer/>
                            <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="templateContainer" style={styles.templateContainer}>
                                <tbody><tr>
                                    <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
                                        <LogoTop/>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateHeader" style={styles.templateHeader}>
                                        {props.header}
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateBody" style={styles.templateBody}>
                                        <Divider>
                                            {props.children}
                                        </Divider>
                                        <LogoBottom/>
                                    </td>
                                </tr></tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
            </center>
        </div>
    );
}

module.exports = Body;
