import _ from 'lodash';

const getPreview = (data) => {
  return _.get(data, 'preview');
};
const getTitle = (data) => {
  return _.get(data, 'title');
};
const getAds = (data) => {
  return _.get(data, 'ads');
};
const getImages = (data) => {
  return _.get(data, 'images');
};

export { getPreview, getTitle, getAds, getImages };
