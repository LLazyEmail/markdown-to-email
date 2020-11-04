const React = require('react');

const styles = require('./styles');

const Section = (props) => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnTextBlock" style={styles.textBlock}>
            <tbody className="mcnTextBlockOuter">
            <tr>
                <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
                    <table align="left" border={0} cellPadding={0} cellSpacing={0} style={styles.textContentContainer} width="100%" className="mcnTextContentContainer">
                        <tbody>
                        <tr>
                            <td valign="top" className="mcnTextContent" style={styles.textContent}>
                                {props.children}
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

module.exports = Section;
