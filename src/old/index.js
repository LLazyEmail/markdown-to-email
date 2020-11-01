const fs = require('fs')
// const parseSource = require(''./parseSource.js')
const _ = require('lodash')
const readFile = require('../parseSource');

const { write, isFolderExists } = require('../utils');

let header,
  footer,
  socials,
  promo = '',
  section,
  emailBody = '';


const REGEX_MARKDOWN_LINK = '';

const Convert = new Object()
Object.defineProperties(Convert, {
//   'subject': {
//     value: function (text) {
//       return this.replace('*|MC:SUBJECT|*', text.slice(3))
//     }
//   },
//   'previewText': {
//     value: function (text) {
//       return this.replace('*|MC_PREVIEW_TEXT|*', text.slice(3))
//     }
//   },
  'image': {
    value: function (text) {
      const altText = text.match(/\[(.*?)\]/g)[0].replace(/[\[\]]/g, '');
      const src = text.match(/\((.*?)\)/g)[0].replace(/[\(\)]/g, '')

      return readFile('typography/image')
        .replace('{src}', src)
        .replace('{altText}', altText)
    }
  },
  'links': {
    value: function (text) {


      const regex = /\[(.*?)\]\((.*?)\)/g


      const linkTemplate = readFile('typography/link')

      let m;

      do {
        m = regex.exec(text);
        if (m) {
          text = text.replace(m[0], linkTemplate.replace('{href}', m[2]).replace('{content}', m[1]))
          console.log(text);
        }
      } while (m);

      return text
    }
  },
  'sponsorship': {
    value: function (text) {


      const regex = /\[(.*?)\]/g


      const [ src, href, content ] = text.match(regex).map(match => match.replace(/[\[\]]/g, ''))

      return readFile('body/promo')
        .replace('{src}', src)
        .replace('{href}', href)
        .replace('{content}', content)
    }
  },
  'bold': {
    value: function (text) {

      const regex = /\*\*(.*?)\*\*/g

      let m;

      do {
        m = regex.exec(text);

        // console.log(m);

        if (m) {



          text = text.replace(m[0], '<strong style="font-weight: bolder;">' + m[1] + '</strong>')




        }
      } while (m);

      return text
    }
  },
  'italic': {
    value: function (text) {


      const regex = /\_(.*?)\_/g

      let m;

      do {
        m = regex.exec(text);
        if (m) {
          text = text.replace(m[0], '<em>' + m[1] + '</em>')
        }
      } while (m);

      return text
    }
  },

})

function combineCombineReplaceMeLater(string, value) {
  return string += value;
}


//@todo can we move it out?
function parseSource() {



  let thisSource =
    Convert.htmlComments(fs.readFileSync('source/source-for-index.md', 'utf8'))
      .trim()
      .split('\n')
      .map(line => line.replace('\r', '').replace('"image_tooltip"', ''));



  // ------------------------ move out ----------------
  // @todo list, lists, listItems - names sucks

  // Detect indexes of list items (via <li>)
  // yes, feel free to change the name later
  const array_of_indexes_that_containing_list_items = thisSource.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentValue.slice(0, 2) === '* ') {
      accumulator.push(currentIndex)
    }
    return accumulator
  }, [])


  // the_list_as_it_should_be([], array_of_indexes_that_containing_list_items)

  const list = readFile('typography/list')
  const listItem = readFile('typography/listItem')


  // console.log(thisSource);

  // Replace text with html tags
  array_of_indexes_that_containing_list_items.map(listItemIndex => {
    var somethng = listItem.replace('{content}', thisSource[listItemIndex].slice(2));
    // console.log(somethng)
    thisSource[listItemIndex] = listItem.replace('{content}', thisSource[listItemIndex].slice(2))

  })


  //
  // ------------------------ move out ----------------

  // LINE IS AN ITEM OF OUR ARRAY WITH CONTENT INSIDE.
  // AS NOBODY WANTED TO DO A BETTER STRUCTURE - WE HAVE AN ARRAY OF STRINGS THAT FUCKING MA HEAD
  thisSource.forEach(line => {

    // Below is the most stupid and un-reliable variable that this project has.
    const tag = line.slice(0, 2)

    switch (tag) {
      case '#!':
        // header = Convert.subject.call(header, line)
        break
      case '#~':
        // header = Convert.previewText.call(header, line)
        break
      case '![':
        // emailBody += Convert.image(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.image(line));
        break
      case '~[':
        // promo = Convert.sponsorship(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.sponsorship(line));
        break
    }
  })

  THEsection = readFile('body/empty-section', 'utf8')
    .replace('{content}', emailBody)
}
