const React = require('react');

const styles = require('./styles');

const Paragraph = (props) => {
    return (
        <div dir="ltr" style={styles.ltr}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    {props.children}
                </span>
            </span>
        </div>
    );
}

module.exports = Paragraph;
