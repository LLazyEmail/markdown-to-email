const fs = require('fs')
// const parseSource = require(''./parseSource.js')

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
      return fs.readFileSync('./layouts/typography/devider.html', 'utf8')
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
      // const regex =
    }
  }
})

function parseSource() {
  let thisSource = Convert.htmlComments(fs.readFileSync('./source/source.md', 'utf8'))
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

  const list = fs.readFileSync('./layouts/typography/list.html', 'utf8')
  const listItem = fs.readFileSync('./layouts/typography/listItem.html', 'utf8')

  // Replace text with html tags
  lists.map(listItemIndex => {
      thisSource[listItemIndex] = listItem.replace('{content}', thisSource[listItemIndex].slice(2))
  })

  thisSource.forEach(line => {
    const tag = line.slice(0, 2)

    line = Convert.bold(line)
    line = Convert.italic(line)

    switch(tag) {
      // case '#!':
      //   header = Convert.subject.call(header, line)
      //   break
      // case '#~':
      //   header = Convert.previewText.call(header, line)
      //   break
      case '# ':
        emailBody += Convert.title(line)
        break
      case '##':
        emailBody += Convert.subtitle(line)
        break
      case '![':
        emailBody += Convert.image(line)
        break
      case '':
        emailBody += Convert.linebreak()
        break
      case '~[':
        promo = Convert.sponsorship(line)
        break
      default:
        line = Convert.links(line)
        emailBody += Convert.paragraph(line)
        break
    }
  })

  section = fs.readFileSync('./layouts/body/section.html', 'utf8')
              .replace('{content}', emailBody)
}
parseSource()



var dir = './generated';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


// const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);
const newFile = String.prototype.concat(section);

fs.writeFile('./generated/content.html', newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written')
})
