import React from 'react';
import { styles } from './body/styles';
import LogoTop from './body/logoTop';
import LogoBottom from './body/logoBottom';
import Footer from './footer';
import BodyPrototipe from './body/BodyPrototipe';
import Divider from './body/divider';

const App = ({header}) => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                id="bodyTable"
                style={styles.bodyTable}
            >
                <tbody>
                <tr>
                    <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>

                    <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="templateContainer"
                        style={styles.templateContainer}
                    >
                        <tbody>
                        <tr>
                            <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
                                <LogoTop />
                            </td>
                            </tr>
                        <tr>
                            <td valign="top" id="templateHeader" style={styles.templateHeader} data-testid="bodyPropsTest">
                                {header}
                            </td>
                            </tr>
                        <tr>
                            <td valign="top" id="templateBody" style={styles.templateBody}>
                                <Divider>
                                    <BodyPrototipe />
                                </Divider>
                                <LogoBottom />
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <Footer />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default App;
