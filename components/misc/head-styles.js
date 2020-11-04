const fs = require('fs');

module.exports = fs.readFileSync('head-styles.css').toString('utf8');
