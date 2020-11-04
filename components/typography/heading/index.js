const React = require('react');

const styles = require('styles');

const Heading = (props) => {
    return (
        <h3 className="mc-toc-title" dir="ltr" style={styles.title}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    {props.children}
                </span>
            </span>
        </h3>
    );
}

module.exports = Heading;
