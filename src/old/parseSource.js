//@todo move out into utils file

function readFile(fileName) {
  return require(`../../layouts/${fileName}`);
}

module.exports = readFile;