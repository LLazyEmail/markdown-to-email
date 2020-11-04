const React = require('react');

const Paragraph = (props) => {
    return (
        <div dir="ltr" style={{textAlign: 'justify'}}>
            <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'}}>
                    {props.children}
                </span>
            </span>
        </div>
    );
}

module.exports = Paragraph;
