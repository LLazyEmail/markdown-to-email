import _ from 'lodash';

const getValueByName = (obj, propName) => {
  return _.get(obj, propName);
};
const getPreview = (data) => {
  return getValueByName(data, 'preview');
};
const getTitle = (data) => {
  return getValueByName(data, 'title');
};
const getAds = (data) => {
  return getValueByName(data, 'ads');
};
const getImages = (data) => {
  return getValueByName(data, 'images');
};


export { getValueByName, getPreview, getTitle, getAds, getImages };
