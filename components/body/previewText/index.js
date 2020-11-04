const React = require('react');

const styles = require('./styles');

const PreviewText = (props) => {
    return (
        <span className="mcnPreviewText" style={styles.previewText}>
            {props.children}
        </span>
    );
}

module.exports = PreviewText;
