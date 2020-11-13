import React from 'react';

export default function Strong (props) {
    return (
        <strong style={{fontWeight: "bolder"}} data-testid = "strongChildrenTest">
            {props.children}
        </strong>
    );
}
