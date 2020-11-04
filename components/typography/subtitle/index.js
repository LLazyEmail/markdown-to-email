const React = require('react');

const styles = require('./styles');

const SubTitle = (props) => {
    return (
        <p dir="ltr" style={styles.ltr}>
            <span style={styles.spanFont}>
                <span style={styles.spanSize}>
                    <strong id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2">
                        {props.children}
                    </strong>
                </span>
            </span>
        </p>
    );
}

module.exports = SubTitle;
