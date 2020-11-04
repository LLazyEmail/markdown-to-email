const React = require('react');

const List = (props) => {
    return (
        <ul dir="ltr">
            {props.children}
        </ul>
    )
}

module.exports = List;
