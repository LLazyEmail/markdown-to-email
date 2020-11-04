const React = require('react');

const Strong = (props) => {
    return (
        <strong style="font-weight: bolder;">
            {props.children}
        </strong>
    );
}

module.exports = Strong;
