import React from 'react';

export default function Copyright () {
    return (
        <em data-testid = "copyTest">Copyright © {new Date().getFullYear()} Hacker Noon. All rights reserved.</em>
    );
}
