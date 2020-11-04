const React = require('react');

const styles = require('./styles');

const MainTitle = (props) => {
    return (
        <h1 className="mc-toc-title" dir="ltr" style={styles.title}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    {props.children}
                </span>
            </span>
        </h1>
    );
}

module.exports = MainTitle;
