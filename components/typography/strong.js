const React = require('react');

const Strong = (props) => {
    return (
        <strong style={{fontWeight: "bolder"}}>
            {props.children}
        </strong>
    );
}

module.exports = Strong;
