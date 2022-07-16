//-----------------------

import TObject, {
  printMain,
  printFooter,
  printBody,
} from 'atherdon-old-newsletter-js-outertemplate';

const plainV2 = () => {
  console.log(TObject.printMain());
  console.log(TObject.printFooter());
  console.log(TObject.printBody());
};

export default plainV2;
