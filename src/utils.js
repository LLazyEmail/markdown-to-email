const fs = require("fs");
const os = require('os');
const chalk = require("chalk");
// @todo add lodash here. will be pretty useful

function readFile(fileName) {
  return require(`../layouts/${fileName}`);
}

//@todo it's very bad to use converter here, i think it;s deserve a separated file.
// this utls file should serve a source for a very small and common methods.
// module.export = Converter;

//@TODO improve with lodash
function checkWarnings(warnings){
    for (let warningType in warnings) {
      if (warnings[warningType]) {
        var message = `WARNING source-full.md has ${warnings[warningType]} ${warningType}. Replace it to memes`;
        console.log(chalk.yellow(message));
      }
    }
}


//@TODO improve with lodash
function checkErrors(errors){
    if (Object.values(errors).includes(false)) {
      for (let errorType in errors) {
        if (!errors[errorType]) {
          console.log(chalk.red(`ERROR source-full.md doesn't has ${errorType}`));
        }
      }
      console.log(chalk.red.bold('The full template has not been parsed!'));
      return true;
    }
  
    return false;
}

function displayCLIErrors(errors, warnings){
    if(checkErrors(errors)) {
        return;
    } else {
        checkWarnings(warnings);
    }
}

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
  newLine,
  displayCLIErrors,
  checkErrors,
  checkWarnings
};
