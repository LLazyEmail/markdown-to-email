import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import remarkStringify from 'remark-stringify';

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const readSourceFile = (fileName) => {
  return readFileSync(fileName, { encoding: 'utf-8' });
};

// console.log(readSourceFile('./src/source.md'));

const sourceFile = readSourceFile('./src/source.md');

// console.log(unified());
// unified()
//   .use(remarkParse)
//   .use(rehypeStringify)
//   .process(sourceFile)
//   .then((data) => {
//     console.log('data', data);
//   });

// unified()
//   .use(remarkParse)
//   .use(remarkGfm)
//   .use(remarkRehype)
//   .use(rehypeStringify)
//   .process(sourceFile)
//   .then((file) => {
//     console.log(String(file));
//   });

function transformer(ast) {
  visit(ast, 'link', visitor);
  console.log('call');
  function visitor(node) {
    console.log('node', node);
    const data = node.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});
    const url = node.url;

    props.target = '_blank';
    props.rel = 'noopener';
    props.class = 'hello';
    console.log('props', props);
    return;
  }
}

function links() {
  return transformer;
}

unified()
  .use(remarkParse)
  // use remark plugins here
  .use(links)
  .use(remarkStringify)
  .use(remarkRehype)
  // use rehype plugins here
  .use(rehypeStringify)
  .process(sourceFile)
  .then((data) => {
    console.log('data', data);
  });
