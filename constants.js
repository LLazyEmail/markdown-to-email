// @todo yeah yeah yeah
// I know that everything is bad about this file.
// please change that, I'll be very happy about it.

// @todo add lodash here. will be pretty useful

// @todo make it work



const paymentMethods = {
  STRIPE: {
    key: 'STRIPE',
    value: 1,
    title: 'Stripe Payment',
  },
  PAYPAL: {
    key: 'PAYPAL',
    value: 2,
    title: 'Paypal Payment',
  },
  AMAZON_PAYMENT: {
    key: 'AMAZON_PAYMENT',
    value: 3,
    title: 'Amazon Payment',
  }
}

const shippingMethods = {
  SKYNET: 'SKYNET',
  GDEX: 'GDEX',
  DHL: 'DHL',
  UPS: 'UPS',
}

// example paymentMethods.AMAZON_PAYMENT

// how to make a loop?
// Object.keys(paymentMethods).map(key => {
//   console.log(paymentMethods[key])
// })



// @todo expand this thing
// .replace(/^### (.*$)/gim, '<h3>$1</h3>')
// .replace(/^## (.*$)/gim, '<h2>$1</h2>')
// .replace(/^# (.*$)/gim, '<h1>$1</h1>')
// .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
// .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
// .replace(/\*(.*)\*/gim, '<i>$1</i>')
// .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
// .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
// .replace(/\n$/gim, '<br />')


// @todo or expand this thing
// this.rules =  [
//   {regex: /(#+)(.*)/g, replacement: header},                                         // headers
//   {regex: /!\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<img src=\'$2\' alt=\'$1\'>'}, // image
//   {regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>'},        // hyperlink
//   {regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>'},                  // bold
//   {regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>'},                             // emphasis
//   {regex: /\~\~(.*?)\~\~/g, replacement: '<del>$1</del>'},                           // del
//   {regex: /\:\"(.*?)\"\:/g, replacement: '<q>$1</q>'},                               // quote
//   {regex: /`(.*?)`/g, replacement: '<code>$1</code>'},                               // inline code
//   {regex: /\n\*(.*)/g, replacement: ulList},                                         // ul lists
//   {regex: /\n[0-9]+\.(.*)/g, replacement: olList},                                   // ol lists
//   {regex: /\n(&gt;|\>)(.*)/g, replacement: blockquote},                              // blockquotes
//   {regex: /\n-{5,}/g, replacement: '\n<hr />'},                                      // horizontal rule
//   {regex: /\n([^\n]+)\n/g, replacement: para},                                       // add paragraphs
//   {regex: /<\/ul>\s?<ul>/g, replacement: ''},                                        // fix extra ul
//   {regex: /<\/ol>\s?<ol>/g, replacement: ''},                                        // fix extra ol
//   {regex: /<\/blockquote><blockquote>/g, replacement: '\n'}                          // fix extra blockquote
// ];
