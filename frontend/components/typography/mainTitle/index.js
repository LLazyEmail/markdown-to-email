import React from 'react';
import styles from './styles';

export default function MainTitle (props){
    return (
        <h1 className="mc-toc-title" dir="ltr" style={styles.title}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    {props.children}
                </span>
            </span>
        </h1>
    );
}
