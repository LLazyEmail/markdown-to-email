const fs = require('fs')
let header,
  footer,
  socials,
  promo,
  section,
  emailBody;


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
        const regex = /\[(.*?)\]/g
        const [src, href, altText] = text.match(regex).map(match => match.replace(/[\[\]]/g, ''))

        return fs.readFileSync('./layouts/typography/image.html', 'utf8')
          .replace('{src}', src)
          .replace('{href}', href)
          .replace('{altText}', altText)
      }
  }
})

const source = fs.readFileSync('./source/source.md', 'utf8')

function parseSource(source) {
  let thisSource =
    source
      .split('\n')
      .map(line => line.replace('\r', ''))
      .filter(string => string !== '');

  function replaceTags() {
    thisSource.forEach(line => {
      const tag = line.slice(0, 2)

      switch(tag) {
        case '# ':
          convert.title(line)
          break
        case '##':
          convert.subtitle(line)
          break
        case '![':
          convert.image(line)
          break
        default:
          convert.paragraph(line)
          break
      }
    })
  }
  replaceTags()


  section = fs.readFileSync('./layouts/body/section.html', 'utf8')
              .replace('{content}', emailBody)

}
parseSource(source)


const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);

fs.writeFile('./generated/newEmail.html', newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written')
})
