const React = require('react');

const styles = require('./styles');

const ListItem = (props) => {
    return (
        <li style={styles.li}>
            <p dir="ltr" role="presentation" style={styles.presentation}>
                {props.children}
            </p>
        </li>
    );
}

module.exports = ListItem;
