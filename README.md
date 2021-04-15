[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/atherdon/markdown-to-email)

# Markdown-to-email
This simple and light tool generates email from markdown. The command is `npm run parse`. The path to markdown file must be `./source/source.md`, and output directory is `generated/newEmail.html`.

We tried to create our own wheel, then we failed.
Arthur get bored trying to fix it and make it work properly.
So he just decide to google a working version that can solve his problems.

0. I find this link https://gist.github.com/jbroadway/2836900
1. then this link https://gist.github.com/budparr/112f08a3033dd878d0e271e2af61faef
2. and then I added javascript into my google Search https://gist.github.com/renehamburger/12f14a9bd9297394e5bd
3. then we tried different approaches, failed few times and find out how to fix some bugs.
4. then I tried to google our repository and find out the latest version of this module - https://github.com/showdownjs/showdown
5. then I find out that all template engines still sucks and decide to migrate "frontend" part to react
6. i'm exploring the best known to me tools for markdown: remark and rehype. plus, as docusaurus using them and mdx format - we'll try it too

`yarn parse`


Great Online Preview tool https://dillinger.io/


## Syntax
Parser uses no libraries, so it copies markdown syntax and based on opening tag generates email component (image, paragraph, subtitle, etc.). There is a list of existing tags:

### Subject
```
#!
```
The subject of email, will be displayed in the email preview.

### Preview text
```
#~
```
Preview text of email, will be displayed in the email preview.

### Title
```
#
```
Title of email, by default at the top of email body.

### Subtitle
```
##
```
Subtitle, can be seen anywhere in email body.

### Sponsorship
```
~[content][href][src]
```
The first symbol should be tilde `~`, and all other attributes should be not empty, or this will cause errors. `src` - absolute path to image or may be url, `href` - the link of sponsorship block, `content` - the text near the image (also link, wrapped in `href`). Where ever you place sponsorship block, it will be concatenated and parsed at the top and bottom of email body.

### Image or GIF
```
![src][href][alt text]
```
The first symbol `!`, and all other attributes are required, or error will appear. `src` - absolute path to image or may be url, `href` - the link of image, `alt text` - the text, when image not rendered yet.

### Paragraph
Default paragraph contains no special opening symbols, just straight text.

### Link
```
[content](href)
```
Consist of two parameters - `content`, the text of the link and `href` - the url of link. Can be placed at default paragraph.

### Divider
You may use empty line in email body, just in the markdown document leave line empty, it will be parsed as real line break.

## Work principles
The parser reads source file from `source/source.md` and based on opening tag renders goes in `layouts` folder and chooses relevant typography or section (sponsorship) element. Supported tags displayed in this document.



#### Remark plugins to try later later later
- https://github.com/remarkjs/remark-html
- https://github.com/remarkjs/remark-breaks
- https://github.com/vercel/remark-capitalize
- https://github.com/remarkjs/remark-html
- https://github.com/laat/remark-first-heading
- https://github.com/remarkjs/remark-images
- https://github.com/remarkjs/remark-lint
- https://github.com/remarkjs/remark-inline-links
- https://github.com/dimerapp/remark-macro
- https://github.com/remarkjs/remark-normalize-headings
- https://github.com/remarkjs/remark-rehype

- https://github.com/sergioramos/remark-hint

- https://github.com/markedjs/marked
- https://github.com/mdx-js/mdx
- https://github.com/markedjs/marked

Links
- https://codepen.io/rh/pen/BoyNdy
- https://gist.github.com/renehamburger/12f14a9bd9297394e5bd
- https://github.com/Chalarangelo/parse-md-js/blob/master/parsemd.js
- https://www.bigomega.dev/markdown-parser
- https://gist.github.com/budparr/112f08a3033dd878d0e271e2af61faef
- https://gist.github.com/jbroadway/2836900
- https://stackoverflow.com/questions/47016770/replace-markdown-characters-with-regex


- https://www.htmlemailcheck.com/check/

more about regex

- https://stackoverflow.com/questions/51850672/how-to-test-this-regex-in-jest
- https://www.bitdegree.org/learn/regex-javascript
- https://habr.com/ru/post/190304/
- https://www.regexpal.com/96555
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
