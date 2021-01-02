const fs = require("fs");
const os = require('os');
// @todo add lodash here. will be pretty useful


// const Converter = {
//   REGEXP_H3: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
//   },
//   REGEXP_H2: {
//     key: "REGEXP_H2",
//     value: 2,
//     title: "xxx",
//   },
//   REGEXP_H1: {
//     key: "REGEXP_H1",
//     value: 3,
//     title: "xxx",
//   },
//   REGEXP_BLOCKQUOTE: {
//     key: "REGEXP_BLOCKQUOTE",
//     value: 4,
//     title: "xxx",
//   },
//   REGEXP_B: {
//     key: "REGEXP_B",
//     value: 5,
//     title: "xxx",
//   },
//   REGEXP_I: {
//     key: "REGEXP_I",
//     value: 6,
//     title: "xxx",
//   },
//   REGEXP_IMG: {
//     key: "REGEXP_H3",
//     value: 7,
//     title: "xxx",
//   },
//   REGEXP_A: {
//     key: "REGEXP_A",
//     value: 8,
//     title: "xxx",
//   },
//   REGEXP_BR: {
//     key: "REGEXP_BR",
//     value: 9,
//     title: "xxx",
//   },
// };

// example paymentMethods.AMAZON_PAYMENT

// how to make a loop?
// Object.keys(paymentMethods).map(key => {
//   console.log(paymentMethods[key])
// })

//@todo it's very bad to use converter here, i think it;s deserve a separated file.
// this utls file should serve a source for a very small and common methods.
// module.export = Converter;

function write(fileName, content, dir = "generated", message) {
  // isFolderExists(dir); // @todo finish https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise/50768253

  var _path = dir + "/" + fileName; //@todo it's not an ideal thing

  fs.writeFileSync(_path, content, function (err) {
    if (err) throw new Error("file not written");
  });

  message && console.log("file has been written successfully" + fileName);
}

function readSourceFile(fileName) {
  return fs.readFileSync(fileName, { encoding: "utf-8" });
}

function readFile(fileName) {
  return require(`../layouts/${fileName}`);
}

function isFolderExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

const platform = os.platform();
const newLine = platform === "win32" ? "\r\n" : "\n";

module.exports = {
  write,
  readFile,
  readSourceFile,
  isFolderExists,
  newLine
};
