import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const CONST_FILE_CREATED = '';
const CONST_FILE_NOT_WRITTEN = '';

// writeHTML
function write(fileName, content, dir = 'generated', message) {
    // isFolderExists(dir);
    // @todo finish https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise/50768253
  
    const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing
  
    writeFileSync(_path, content, (err) => {
      if (err) {
        throw new Error('file not written');
      }
    });
  
     // i dont like this line @TODO change it
    message && console.log(`file has been written successfully${fileName}`);
  }
  
  function readSourceFile(fileName) {
    return readFileSync(fileName, { encoding: 'utf-8' });
  }
  
  function isFolderExists(dir) {
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }
  }
  
  const generateTemplateName = (suffix, ext = 'html') => `${suffix}-${Date.now()}.${ext}`;
  

  export {
    write,   
    readSourceFile,
    isFolderExists,
    generateTemplateName
  }
