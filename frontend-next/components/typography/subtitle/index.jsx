import React from 'react';
import styles from './styles';

export default function SubTitle(props) {
    return (
        <p dir="ltr" style={styles.ltr}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    <strong id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2" data-testid = "subtitleChildrenTest">
                        {props.children}
                    </strong>
                </span>
            </span>
        </p>
    );
}
