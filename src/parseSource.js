function readFile(fileName) {
  return require(`../layouts/${fileName}`);
}

module.exports = readFile;