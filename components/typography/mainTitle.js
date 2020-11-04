const React = require('react');

const MainTitle = (props) => {
    return (
        <h1 className="mc-toc-title" dir="ltr" style={{textAlign: 'center', display: 'block', margin: 0, padding: 0, color: '#111111', fontFamily: '"Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '26px', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '125%', letterSpacing: 'normal'}}>
            <span style={{fontFamily: 'trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif'}}>
                <span style={{fontSize: '30px'}}>
                    {props.children}
                </span>
            </span>
        </h1>
    );
}

module.exports = MainTitle;
