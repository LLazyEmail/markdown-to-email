const headStyles = require('./misc/head-styles');
const Fonts = require('./misc/fonts');

const React = require('react');

const Head = () => {
    return (
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>The Secrets of High-Performing DevOps teams</title>
            <style>
                {headStyles}
            </style>
            <Fonts/>
        </head>
    );
}

module.exports = Head;
