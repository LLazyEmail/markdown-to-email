import React from 'react';
import styles from './style';
import LogoTop from './logoTop';
import LogoBottom from './logoBottom';
import Divider from './divider';
import Footer from '../footer';

export default function Body(props) {
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} height="100%" width="100%"
                       id="bodyTable" style={styles.bodyTable}>
                    <tbody>
                    <tr>
                        <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>

                            <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="templateContainer"
                                   style={styles.templateContainer}>
                                <tbody>
                                <tr>
                                    <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
                                        <LogoTop/>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateHeader" style={styles.templateHeader} data-testid = "bodyPropsTest">
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
                                </tr>
                                </tbody>
                            </table>
                            <Footer/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
