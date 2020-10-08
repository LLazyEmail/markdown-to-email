const fs = require('fs')
let header,
  footer,
  socials,
  promo,
  section;


header = fs.readFileSync(`./layouts/header.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
   // data;
})

socials = fs.readFileSync(`./layouts/socials.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
   // data;
})

footer = fs.readFileSync(`./layouts/footer.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
   // data;
})

promo = fs.readFileSync(`./layouts/body/promo.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
  // data;
  // console.log(promo);
})

// section = fs.readFileSync(`./layouts/body/section.html`, 'utf8', function(err, data) {
//   if (err) throw new Error(`file not found`)
//    // = data;
// })


let emailBody;
const source = fs.readFileSync('./source/source.html', 'utf8')

function parseSource(source) {
  let thisSource = source;

  function replaceTags() {

    if (thisSource.indexOf('<') !== -1) {
      const indexOfTag = thisSource.indexOf('<');
      const tag = thisSource.slice(indexOfTag, indexOfTag + 3);

      switch(tag) {
        case '<h1':
          convertTag('<h1>', '</h1>', './layouts/typography/mainTitle.html')
          break;
        case '<p>':
          convertTag('<p>', '</p>', './layouts/typography/paragraph.html')
          break;
        case '<h2':
          convertTag('<h2>', '</h2>', './layouts/typography/subtitle.html')
        case '<im':
          convertTag('<img', '/>', './layouts/typography/image.html')
        default:
          console.log('no tag detected')
          break;
      }

      replaceTags()
    }
  }
  replaceTags()

  // console.log('Document converted successfuly')
  // console.log(emailBody)

  function convertTag(openingTag, closingTag, templatePath) {
    const start = thisSource.indexOf(openingTag) + openingTag.length
    const end = thisSource.indexOf(closingTag)
    const text = thisSource.slice(start, end)

    if (openingTag === '<img') {
      const src = /src=\"(.*?)\"/g.exec(text)
      const href = /href=\"(.*?)\"/g.exec(text)

      if (src && href) {
        console.log(src[1], href[1]);

        emailBody += fs.readFileSync(templatePath, 'utf8')
                        .replace('{src}', src[1])
                        .replace('{href}', href[1])

        thisSource = thisSource.slice(end + closingTag.length);
      }
      return;
    }

    emailBody += fs.readFileSync(templatePath, 'utf8')
                    .replace('{content}', text)

    thisSource = thisSource.slice(end + closingTag.length);
    // console.log(thisSource);
  }
  // console.log(thisSource)

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
