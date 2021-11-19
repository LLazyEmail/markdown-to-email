import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import remarkStringify from 'remark-stringify';
import { stream } from 'unified-stream';

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const readSourceFile = (fileName) => {
  return readFileSync(fileName, { encoding: 'utf-8' });
};

const sourceFile = readSourceFile('./src/source.md');

// attacher or
const attacher = (options) => {
  console.log('options', options);
  const transformer = (tree) => {
    console.log('tree', tree);
    visit(tree, (node) => console.log(node.type));
  };

  return transformer;
};

const prefixHeading = (options) => {
  console.log('options', options);
  const transformer = (tree) => {
    visit(tree, 'heading', (node) => {
      console.log('tree', tree);
      if (node.depth !== 1) {
        return;
      }

      visit(tree, 'text', (textNode) => {
        textNode.value = 'Breaking ' + textNode.value;
      });
    });
  };
  return transformer;
};

const processor = unified()
  .use(remarkParse)
  // .use(attacher)
  .use(prefixHeading, { prefix: 'hi' })
  .use(() => (tree) => {
    visit(tree, 'link', (node) => {
      console.log('node', node);
      node.data = { hProperties: { class: 'styles22' } };
    });
    // console.log(tree);
  })
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(sourceFile)
  .then((data) => {
    console.log('data', data);
  });

// process.stdin
//   .pipe(
//     stream(processor), // We give the input to the processor
//   )
//   .pipe(process.stdout);

// unified()
//   .use(remarkParse)
//   // use remark plugins here
//   .use(remarkStringify)
//   .use(remarkRehype)
//   // use rehype plugins here
//   .use(rehypeStringify)
//   .process(sourceFile)
//   .then((data) => {
//     console.log('data', data);
//   });

// console.log(readSourceFile('./src/source.md'));

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

// function transformer(ast) {
//   visit(ast, 'link', visitor);
//   console.log('call');
//   function visitor(node) {
//     console.log('node', node);
//     const data = node.data || (node.data = {});
//     const props = data.hProperties || (data.hProperties = {});
//     const url = node.url;

//     props.target = '_blank';
//     props.rel = 'noopener';
//     props.class = 'hello';
//     console.log('props', props);
//     return;
//   }
// }

// function links() {
//   return transformer;
// }
