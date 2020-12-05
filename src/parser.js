const { parse } = require("./parse");
const { write, readFile, isFolderExists } = require("./utils");

isFolderExists('generated');

const FULL_SOURCE = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";

function generate_full_template(){
        let html = readFile("main");
  const { previewText, content } = parse(FULL_SOURCE);

  html = html.replace("{previewText}", previewText);
   html = html.replace("{content}", content);
   const fileName = "full-template" + Date.now() + ".html";
   write(fileName, html);
}

function generate_content_only(){
      const parsedContent = parse(CONTENT_SOURCE);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
}

switch(process.env.PARSE){
  case "full":
      let html = readFile("main");
  const { previewText, content } = parse(FULL_SOURCE);

  html = html.replace("{previewText}", previewText);
   html = html.replace("{content}", content);
   const fileName = "full-template" + Date.now() + ".html";
   write(fileName, html);
    
    break;
  case "react":
    //same as default, but with react components instead.
    const parsedContent = parse(CONTENT_SOURCE);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
    break;  
  default:
    const parsedContent = parse(CONTENT_SOURCE);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
}
