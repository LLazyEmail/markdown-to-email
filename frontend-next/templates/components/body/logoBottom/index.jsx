import React from 'react';
import styles from './styles';

export default function LogoBottom(){
    return (
        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnImageBlock" style={styles.imageBlock}>
            <tbody className="mcnImageBlockOuter">
            <tr>
                <td valign="top" style={styles.imageBlockInner} className="mcnImageBlockInner">
                    <table align="left" width="100%" border={0} cellPadding={0} cellSpacing={0}
                           className="mcnImageContentContainer" style={styles.imageContentContainer}>
                        <tbody>
                        <tr>
                            <td className="mcnImageContent" valign="top" style={styles.imageContent}>
                                <a href="https://hackernoon.com/" target="_blank" style={styles.title}>
                                    <img align="center" alt=""
                                         src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png"
                                         width={564} style={styles.img} className="mcnImage"/>
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
