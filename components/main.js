const Head = require('./head');
const Body = require('./body');

const React = require('react');

const App = () => {
  return (
      <html>
        <Head/>
        <Body
            header={"Some Header"}
        >
            Some content
        </Body>
      </html>
  );
}

module.exports = App;
