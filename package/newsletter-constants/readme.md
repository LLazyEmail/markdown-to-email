### RegEx constants for thematic newsletters

submodule for https://github.com/atherdon/markdown-to-email

@todo: 
- we need to move some tests here




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

### Separator
add `[separator]`
