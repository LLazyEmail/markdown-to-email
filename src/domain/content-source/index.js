import { resolve } from 'path';
import { readSourceFile, readFrontMatter } from 'markup-generator';
// ------------------
// will be removed later
import { getPreview, getTitle, getAds, getImages } from '../frontmatter-data';
// -------------------
const FULL_SOURCE = resolve('./source/source.md');
const RECIPES_SOURCE = resolve('./source/recipes/source-nmtg.md');
// updated version
// console.log(resolve('./source/front-matter/03-hackernoon-source.md'))
const FRONT_HN_SOURCE = resolve(
  './source/front-matter/03-hackernoon-source.md',
);
// const FRONT_NMTG_SOURCE = resolve(
//   './source/front-matter/05-source-weekly-menu.md',
// );
// --------------
const front_markdown_hackernoon = readFrontMatter(FRONT_HN_SOURCE);
// const front_makrdown_nmtg = readFrontMatter(FRONT_NMTG_SOURCE);

// console.log(front_markdown_hackernoon);
const dddata = front_markdown_hackernoon.frontMatter;
// adding it here right now just for trsting purposes

// getPreview(dddata), getTitle(dddata), getAds(dddata), getImages(dddata);
console.log(getPreview(dddata));
console.log(getTitle(dddata));
console.log(getAds(dddata));
console.log(getImages(dddata));

const hackernoonContent = readSourceFile(FULL_SOURCE);
const nomoretogoContent = readSourceFile(RECIPES_SOURCE);

export {
  hackernoonContent,
  FULL_SOURCE,
  nomoretogoContent,
  //   RECIPES_SOURCE,
  front_markdown_hackernoon,
};
