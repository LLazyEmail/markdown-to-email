import React from 'react';
import { styles } from './body/styles';
import LogoTop from './body/logoTop';
import LogoBottom from './body/logoBottom';
import Footer from './footer';
import BodyPrototype from './body/BodyPrototype';
import Divider from './body/divider';
import Table from './html/table';

const App = ({header}) => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <Table
                id="bodyTable"
                style={styles.bodyTable}
            >
                <tbody>
                <tr>
                    <td align="center" valign="top" id="bodyCell" style={styles.bodyCell}>

                    <Table
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
                                    <BodyPrototype />
                                </Divider>
                                <LogoBottom />
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Footer />
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    </div>
);

export default App;
