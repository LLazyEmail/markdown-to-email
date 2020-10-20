const fs = require('fs')
// const parseSource = require(''./parseSource.js')
const _ = require('lodash')

let header,
  footer,
  socials,
  promo = '',
  section,
  emailBody = '';


header = fs.readFileSync(`./layouts/header.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
})
socials = fs.readFileSync(`./layouts/socials.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
})
footer = fs.readFileSync(`./layouts/footer.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
})
promo = fs.readFileSync(`./layouts/body/promo.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
})

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
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')

	return htmlText.trim()
}

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
  'title': {
      value: function(text) {
        return fs.readFileSync('./layouts/typography/mainTitle.html', 'utf8').replace('{content}', text.slice(2))
      }
  },
  'subtitle': {
      value: function(text) {
        return fs.readFileSync('./layouts/typography/subtitle.html', 'utf8').replace('{content}', text.slice(3))
      }
  },
  'paragraph': {
      value: function(text) {
        return fs.readFileSync('./layouts/typography/paragraph.html', 'utf8').replace('{content}', text)
      }
  },
  'image': {
      value: function(text) {
        const altText = text.match(/\[(.*?)\]/g)[0].replace(/[\[\]]/g, '');
        const src = text.match(/\((.*?)\)/g)[0].replace(/[\(\)]/g, '')

        return fs.readFileSync('./layouts/typography/image.html', 'utf8')
          .replace('{src}', src)
          .replace('{altText}', altText)
      }
  },
  'linebreak': {
    value: function() {
      return fs.readFileSync('./layouts/typography/simple-divider.html', 'utf8')
      // return fs.readFileSync('./layouts/typography/devider.html', 'utf8')

    }
  },
  'separator': {
    value: function() {
      return fs.readFileSync('./layouts/typography/simple-divider.html', 'utf8')
    }
  },
  'links': {
    value: function(text) {
      const regex = /\[(.*?)\]\((.*?)\)/g
      const linkTemplate = fs.readFileSync('./layouts/typography/link.html', 'utf8')

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
    value: function(text) {
      const regex = /\[(.*?)\]/g
      const [src, href, content] = text.match(regex).map(match => match.replace(/[\[\]]/g, ''))

      return fs.readFileSync('./layouts/body/promo.html', 'utf8')
                .replace('{src}', src)
                .replace('{href}', href)
                .replace('{content}', content)
    }
  },
  'bold': {
    value: function(text) {
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
    value: function(text) {
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
    value: function(text) {
      const regex = /<!--(([\r\n]|.)*?)-->/g
      const a = text.match(regex);

      for (match in a) {
        text = text.replace(a[match], '')
      }

      return text;
    }
  },
  'lists': {
    value: function(text) {
      console.log('ooops, looks like Eugene forget something :(');
      // const regex =
    }
  }
})

function combineCombineReplaceMeLater(string, value){
  return string += value;
}

function parseSource() {
  let thisSource =
  Convert.htmlComments(fs.readFileSync('./source/source.md', 'utf8'))
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

  const list = fs.readFileSync('./layouts/typography/list.html', 'utf8')
  const listItem = fs.readFileSync('./layouts/typography/listItem.html', 'utf8')





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


    switch(tag) {
      // case '#!':
      //   header = Convert.subject.call(header, line)
      //   break
      // case '#~':
      //   header = Convert.previewText.call(header, line)
      //   break
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

  section = fs.readFileSync('./layouts/body/section.html', 'utf8')
              .replace('{content}', emailBody)

  THEsection = fs.readFileSync('./layouts/body/empty-section.html', 'utf8')
              .replace('{content}', emailBody)
}
parseSource()



var dir = './generated';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


// const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);
// const newFile = String.prototype.concat(section);

// console.log(parseMarkdown(THEsection)); process.exit(1);
// const just_a_guess = parseMarkdown(THEsection);

const newFile = String.prototype.concat(THEsection);

var fileName = "content-" + Date.now() + ".html";

fs.writeFile("./generated/" + fileName, newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written ' + fileName)
})


// fs.writeFile("./generated/xxxxxxx" + fileName, just_a_guess, 'utf8', function(err) {
//   if (err) throw new Error('file not written')
//   // console.log(newFile);
//   console.log('file successfully written ' + fileName)
// })
