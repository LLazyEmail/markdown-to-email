import React from 'react';

export default function Strong (props) {
    return (
        <strong style={{fontWeight: "bolder"}}>
            {props.children}
        </strong>
    );
}
