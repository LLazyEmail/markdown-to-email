const React = require('react');

const Divider = () => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnDividerBlock" style={{
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%',
            tableLayout: 'fixed !important'
        }}>
            <tbody className="mcnDividerBlockOuter">
            <tr>
                <td className="mcnDividerBlockInner" style={{
                    minWidth: '100%',
                    padding: '12px 18px',
                    msoLineHeightRule: 'exactly',
                    msTextSizeAdjust: '100%',
                    WebkitTextSizeAdjust: '100%'
                }}>
                    <table className="mcnDividerContent" border={0} cellPadding={0} cellSpacing={0} width="100%"
                           style={{
                               minWidth: '100%',
                               borderTop: '2px none #EAEAEA',
                               borderCollapse: 'collapse',
                               msoTableLspace: '0pt',
                               msoTableRspace: '0pt',
                               msTextSizeAdjust: '100%',
                               WebkitTextSizeAdjust: '100%'
                           }}>
                        <tbody>
                        <tr>
                            <td style={{
                                msoLineHeightRule: 'exactly',
                                msTextSizeAdjust: '100%',
                                WebkitTextSizeAdjust: '100%'
                            }}>
                                <span/>
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

module.exports = Divider;
