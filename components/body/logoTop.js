const React = require('react');

const LogoTop = ()=>{
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
                    padding: '0px',
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
                                paddingRight: '0px',
                                paddingLeft: '0px',
                                paddingTop: 0,
                                paddingBottom: 0,
                                textAlign: 'center',
                                msoLineHeightRule: 'exactly',
                                msTextSizeAdjust: '100%',
                                WebkitTextSizeAdjust: '100%'
                            }}>
                                <a href="http://www.hackernoon.com" title className target="_blank" style={{
                                    msoLineHeightRule: 'exactly',
                                    msTextSizeAdjust: '100%',
                                    WebkitTextSizeAdjust: '100%'
                                }}>
                                    <img align="center" alt=""
                                         src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png"
                                         width={600} style={{
                                        maxWidth: '1200px',
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
};

module.exports = LogoTop;
