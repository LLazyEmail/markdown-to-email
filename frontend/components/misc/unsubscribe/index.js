import React from 'react';
import styles from './styles';

export default function Unsubscribe({hrefUnsub}) {
    return (
        <a href={hrefUnsub} style={styles.unsubscribe} data-testid = "unsubscribeTest">
            unsubscribe
        </a>
    );
}
