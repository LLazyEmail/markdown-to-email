const React = require('react');

const PreviewText = (props) => {
    return (
        <span className="mcnPreviewText" style={{
            display: 'none',
            fontSize: '0px',
            lineHeight: '0px',
            maxHeight: '0px',
            maxWidth: '0px',
            opacity: 0,
            overflow: 'hidden',
            visibility: 'hidden',
            msoHide: 'all'
        }}>
            {props.children}
        </span>
    );
}

module.exports = PreviewText;
