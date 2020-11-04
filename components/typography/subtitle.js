const React = require('react');

const SubTitle = (props) => {
    return (
        <p dir="ltr" style={{textAlign: 'left', lineHeight: '150%', margin: '10px 0', padding: 0, msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '18px'}}>
            <span style={{fontSize: '17px'}}>
                <span style={{fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'}}>
                    <strong id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2">
                        {props.children}
                    </strong>
                </span>
            </span>
        </p>
    );
}

module.exports = SubTitle;
