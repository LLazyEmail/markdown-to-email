const React = require('react');

const styles = require('./styles');

const Link = (props) => {
    return (
        <a href={props.href} target="_blank" style={styles.link}>
            {props.children}
        </a>
    );
}

module.exports = Link;
