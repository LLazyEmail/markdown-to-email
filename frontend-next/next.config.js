const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});

module.exports = {
    images: {
      domains: ['raw.githubusercontent.com'],
    },
}  
