const fs = require('fs')
// const parseSource = require(''./parseSource.js')
const _ = require('lodash')
const readFile = require('../parseSource');

const { REGEXP_H3, REGEXP_H2, REGEXP_H1, REGEXP_BLOCKQUOTE, REGEXP_B, 
    REGEXP_I, REGEXP_IMG, REGEXP_A, REGEXP_BR,
    REGEXP_HTML_COMMENTS, REGEXP_CUSTOM_SPONSORSHIP, REGEXP_CUSTOM_LINK, REGEXP_CUSTOM_MEME_IMAGE 
} = require('../constants');

const { write, isFolderExists } = require('../utils');

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

// var the_list_as_it_should_be = '<ul>';
// function the_list_as_it_should_be (array, indexes) {
//   console.log(indexes);
//   _.each(array, (value) => {
//
//   })
// }

const REGEX_MARKDOWN_LINK = '';

function parseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(REGEXP_H3, '<h3>$1</h3>')
    .replace(REGEXP_H2, '<h2>$1</h2>')
    .replace(REGEXP_H1, '<h1>$1</h1>')
    .replace(REGEXP_BLOCKQUOTE, '<blockquote>$1</blockquote>')
    .replace(REGEXP_B, '<b>$1</b>')
    .replace(REGEXP_I, '<i>$1</i>')
    .replace(REGEXP_IMG, "<img alt='$1' src='$2' />")
    .replace(REGEXP_A, "<a href='$2'>$1</a>")
    .replace(REGEXP_BR, '<br />')

  return htmlText.trim()
}

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
  'title': {
    value: function (text) {
      return readFile('typography/mainTitle').replace('{content}', text.slice(2))
    }
  },
  'subtitle': {
    value: function (text) {
      return readFile('typography/subtitle').replace('{content}', text.slice(3))
    }
  },
  'paragraph': {
    value: function (text) {
      return readFile('typography/paragraph').replace('{content}', text)
    }
  },
  'image': {
    value: function (text) {
      const altText = text.match(/\[(.*?)\]/g)[0].replace(/[\[\]]/g, '');
      const src = text.match(/\((.*?)\)/g)[0].replace(/[\(\)]/g, '')

      return readFile('typography/image')
        .replace('{src}', src)
        .replace('{altText}', altText)
    }
  },
  'linebreak': {
    value: function () {
      return readFile('typography/simple-divider')
      // return readFile('typography/devider')

    }
  },
  'separator': {
    value: function () {
      return readFile('typography/simple-divider')
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
  'htmlComments': {
    value: function (text) {


      const regex = /<!--(([\r\n]|.)*?)-->/g


      const a = text.match(regex);

      for (match in a) {
        text = text.replace(a[match], '')
      }

      return text;
    }
  }
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

  // console.log('---------')
  // console.log(thisSource);

  // console.log(lists);

  // list.replace('{content}', listItem.slice(2));
  //
  // console.log(list);

  //
  // ------------------------ move out ----------------

  // LINE IS AN ITEM OF OUR ARRAY WITH CONTENT INSIDE.
  // AS NOBODY WANTED TO DO A BETTER STRUCTURE - WE HAVE AN ARRAY OF STRINGS THAT FUCKING MA HEAD
  thisSource.forEach(line => {



    // Below is the most stupid and un-reliable variable that this project has.
    const tag = line.slice(0, 2)

    line = Convert.bold(line)
    line = Convert.italic(line)

    // console.log(tag)


    switch (tag) {
      case '#!':
        header = Convert.subject.call(header, line)
        break
      case '#~':
        header = Convert.previewText.call(header, line)
        break
      case '# ':
        // emailBody += Convert.title(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.title(line));
        break
      case '##':
        // emailBody += Convert.subtitle(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.subtitle(line));
        break
      case '![':
        // emailBody += Convert.image(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.image(line));
        break
      case '':
        // emailBody += Convert.linebreak()
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.linebreak());
        break
      case '~[':
        // promo = Convert.sponsorship(line)
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.sponsorship(line));
        break
      // case '<l':
      // console.log(line);
      // console.log('----------') ; break
      case 'XY':
        // console.log(line);
        // console.log('----------') ;

        emailBody = combineCombineReplaceMeLater(emailBody, Convert.separator() + line + Convert.separator());
        break
      case '--':
        emailBody = combineCombineReplaceMeLater(emailBody, line + Convert.separator()); break;
      default:
        line = Convert.links(line)
        // emailBody += Convert.paragraph(line)
        // console.log(line);
        emailBody = combineCombineReplaceMeLater(emailBody, Convert.paragraph(line));
        break
    }
  })

//   section = readFile('body/section')
//     .replace('{content}', emailBody)

  THEsection = readFile('body/empty-section', 'utf8')
    .replace('{content}', emailBody)
}


parseSource()


// === Replace with methods from utils


var dir = 'generated';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
// isFolderExists();

const newFile = String.prototype.concat(THEsection);

var fileName = "content-" + Date.now() + ".html";

fs.writeFile("generated/" + fileName, newFile, 'utf8', function (err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written ' + fileName)
})


// write("generated/" + fileName, newFile)



// === Replace with methods from utils