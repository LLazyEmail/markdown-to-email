const React = require('react');

const Link = (props) => {
    return (
        <a href={props.href} target="_blank" style={{msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontWeight: 'bold', textDecoration: 'underline'}}>
            {props.children}
        </a>
    );
}

module.exports = Link;
