import React from 'react';

export default function List (props) {
    return (
        <ul dir="ltr" data-testid = "listProsChildrenTest">
            {props.children}
        </ul>
    )
}
