// module.exports = `<li style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:14px">{content}</span></span></li>`;
const React = require('react');

const ListItem = (props) => {
    return (
        <li style={{msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
            <p dir="ltr" role="presentation" style={{lineHeight: '125%', margin: '10px 0', padding: 0, msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '18px', textAlign: 'left'}}>
                {props.children}
            </p>
        </li>
    );
}

module.exports = ListItem;
