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

section = fs.readFileSync(`./layouts/body/section.html`, 'utf8', function(err, data) {
  if (err) throw new Error(`file not found`)
   // = data;
})

const newFile = String.prototype.concat(header, promo, section, promo, socials, footer);

fs.writeFile('./generated/newEmail.html', newFile, 'utf8', function(err) {
  if (err) throw new Error('file not written')
  console.log(newFile);
  console.log('file successfully written')
})
