import React from 'react';

export default function List (props) {
    return (
        <ul dir="ltr">
            {props.children}
        </ul>
    )
}
