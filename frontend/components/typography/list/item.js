import React from 'react';
import styles from './styles';

export default function ListItem (props){
    return (
        <li style={styles.li}>
            <p dir="ltr" role="presentation" style={styles.presentation}>
                {props.children}
            </p>
        </li>
    );
}
