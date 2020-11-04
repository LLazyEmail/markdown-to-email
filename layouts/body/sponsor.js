const React = require('react');

const Sponsor = (props) => {
    return (
        <table border={0} cellPadding={0} cellSpacing={0} className="mcnImageCardRightContentOuter" width="100%" style={{borderCollapse: 'collapse', msoTableLspace: '0pt', msoTableRspace: '0pt', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
            <tbody>
            <tr>
                <td align="center" valign="top" className="mcnImageCardRightContentInner" style={{padding: 0, msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                    <table align="left" border={0} cellPadding={0} cellSpacing={0} className="mcnImageCardRightImageContentContainer" width={200} style={{borderCollapse: 'collapse', msoTableLspace: '0pt', msoTableRspace: '0pt', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                        <tbody>
                        <tr>
                            <td className="mcnImageCardRightImageContent" align="center" valign="top" style={{paddingTop: '18px', paddingRight: 0, paddingBottom: '18px', paddingLeft: '18px', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                                <a href={props.leftHref} title className target="_blank" style={{msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                                    <img alt="" src={props.leftSrc} width={150} style={{maxWidth: '150px', borderRadius: '0%', border: 0, height: 'auto', outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', verticalAlign: 'bottom'}} className="mcnImage" />
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="mcnImageCardRightTextContentContainer" align="right" border={0} cellPadding={0} cellSpacing={0} width={346} style={{borderCollapse: 'collapse', msoTableLspace: '0pt', msoTableRspace: '0pt', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                        <tbody>
                        <tr>
                            <td valign="top" className="mcnTextContent" style={{paddingRight: '18px', paddingTop: '18px', paddingBottom: '18px', color: '#f2f2f2', fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 'normal', textAlign: 'center', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', wordBreak: 'break-word', lineHeight: '150%'}}>
                                <h1 className="mc-toc-title" style={{textAlign: 'center', display: 'block', margin: 0, padding: 0, color: '#111111', fontFamily: '"Merriweather Sans", "Helvetica Neue",Helvetica, Arial, sans-serif', fontSize: '26px', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '125%', letterSpacing: 'normal'}}>
                                    <br />
                                    <a href={props.rightHref} style={{msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontWeight: 'bold', textDecoration: 'underline'}}>
                                    <strong id="docs-internal-guid-98b2620b-7fff-d936-82b8-a8d3a3d3c470">
                                        {props.children}
                                    </strong></a>
                                </h1>
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

module.exports = Sponsor;
