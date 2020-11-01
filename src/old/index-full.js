const fs = require('fs')
// const parseSource = require(''./parseSource.js')
const readFile = require('../parseSource');

const { REGEXP_H3, REGEXP_H2, REGEXP_H1, REGEXP_BLOCKQUOTE, REGEXP_B, 
    REGEXP_I, REGEXP_IMG, REGEXP_A, REGEXP_BR,
    REGEXP_HTML_COMMENTS, REGEXP_CUSTOM_SPONSORSHIP, REGEXP_CUSTOM_LINK, REGEXP_CUSTOM_MEME_IMAGE 
} = require('../constants');

let header,
  footer,
  socials,
  promo = '',
  section,
  emailBody = '';


header = readFile('header');
socials = readFile('socials');
footer = readFile('footer');
promo = readFile('body/promo');

const Convert = new Object()
Object.defineProperties(Convert, {
  'subject': {
    value: function(text) {
      return this.replace('*|MC:SUBJECT|*', text.slice(3))
    }
  },
  'previewText': {
    value: function(text) {
      return this.replace('*|MC_PREVIEW_TEXT|*', text.slice(3))
    }
  },
  'image': {
      value: function(text) {
        const altText = text.match(/\[(.*?)\]/g)[0].replace(/[\[\]]/g, '');
        const src = text.match(/\((.*?)\)/g)[0].replace(/[\(\)]/g, '')

        return readFile('typography/image')
          .replace('{src}', src)
          .replace('{altText}', altText)
      }
  }
})

function parseSource() {
  let thisSource = Convert.htmlComments(fs.readFileSync('source/source.md', 'utf8'))
      .trim()
      .split('\n')
      .map(line => line.replace('\r', '').replace('"image_tooltip"', ''));

  // Detect indexes of list items (via <li>)
  const lists = thisSource.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentValue.slice(0, 2) === '* ') {
      accumulator.push(currentIndex)
    }
    return accumulator
  }, [])

  const list = readFile('typography/list')
  const listItem = readFile('typography/listItem')

  // Replace text with html tags
  lists.map(listItemIndex => {
      thisSource[listItemIndex] = listItem.replace('{content}', thisSource[listItemIndex].slice(2))
  })

  thisSource.forEach(line => {
    const tag = line.slice(0, 2)

    line = Convert.bold(line)
    line = Convert.italic(line)

    switch(tag) {
      case '#!':
        header = Convert.subject.call(header, line)
        break
      case '#~':
        header = Convert.previewText.call(header, line)
        break
      case '![':
        emailBody += Convert.image(line)
        break
      case '~[':
        promo = Convert.sponsorship(line)
        break
    }
  })

  section = readFile('body/section')
              .replace('{content}', emailBody)
}
parseSource()

var dir = 'generated';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);

fs.writeFile('generated/email.html', newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written')
})
