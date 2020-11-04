const React = require('react');

const LogoBottom = () => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnImageBlock" style={{
            minWidth: '100%',
            borderCollapse: 'collapse',
            msoTableLspace: '0pt',
            msoTableRspace: '0pt',
            msTextSizeAdjust: '100%',
            WebkitTextSizeAdjust: '100%'
        }}>
            <tbody className="mcnImageBlockOuter">
            <tr>
                <td valign="top" style={{
                    padding: '9px',
                    msoLineHeightRule: 'exactly',
                    msTextSizeAdjust: '100%',
                    WebkitTextSizeAdjust: '100%'
                }} className="mcnImageBlockInner">
                    <table align="left" width="100%" border={0} cellPadding={0} cellSpacing={0}
                           className="mcnImageContentContainer" style={{
                        minWidth: '100%',
                        borderCollapse: 'collapse',
                        msoTableLspace: '0pt',
                        msoTableRspace: '0pt',
                        msTextSizeAdjust: '100%',
                        WebkitTextSizeAdjust: '100%'
                    }}>
                        <tbody>
                        <tr>
                            <td className="mcnImageContent" valign="top" style={{
                                paddingRight: '9px',
                                paddingLeft: '9px',
                                paddingTop: 0,
                                paddingBottom: 0,
                                textAlign: 'center',
                                msoLineHeightRule: 'exactly',
                                msTextSizeAdjust: '100%',
                                WebkitTextSizeAdjust: '100%'
                            }}>
                                <a href="https://hackernoon.com/" title className target="_blank" style={{
                                    msoLineHeightRule: 'exactly',
                                    msTextSizeAdjust: '100%',
                                    WebkitTextSizeAdjust: '100%'
                                }}>
                                    <img align="center" alt=""
                                         src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png"
                                         width={564} style={{
                                        maxWidth: '15426px',
                                        paddingBottom: 0,
                                        display: 'inline !important',
                                        verticalAlign: 'bottom',
                                        border: 0,
                                        height: 'auto',
                                        outline: 'none',
                                        textDecoration: 'none',
                                        msInterpolationMode: 'bicubic'
                                    }} className="mcnImage"/>
                                </a>
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
module.exports = LogoBottom;
