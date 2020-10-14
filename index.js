const fs = require('fs')
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


const convert = new Object()
Object.defineProperties(convert, {
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
  'htmlComments': {
    value: function(text) {
      const regex = /<!--(([\r\n]|.)*?)-->/g
      const a = text.match(regex);

      for (match in a) {
        text = text.replace(a[match], '')
      }

      return text;
    }
  }
})

function parseSource() {
  let thisSource = convert.htmlComments(fs.readFileSync('./tests/customer-insights.md', 'utf8'))
      .trim()
      .split('\n')
      .map(line => line.replace('\r', ''));

  thisSource.forEach(line => {
    const tag = line.slice(0, 2)

    switch(tag) {
      case '# ':
        emailBody += convert.title(line)
        break
      case '##':
        emailBody += convert.subtitle(line)
        break
      case '![':
        emailBody += convert.image(line)
        break
      case '':
        emailBody += convert.linebreak()
        break
      case '~[':
        promo = convert.sponsorship(line)
        break
      default:
        line = convert.links(line)
        line = convert.bold(line)
        emailBody += convert.paragraph(line)
        break
    }
  })

  section = fs.readFileSync('./layouts/body/section.html', 'utf8')
              .replace('{content}', emailBody)
}
parseSource()

const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);

fs.writeFile('./generated/email.html', newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written')
})
