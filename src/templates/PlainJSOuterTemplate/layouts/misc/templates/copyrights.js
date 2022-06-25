const copyrights = `<em>Copyright © ${new Date().getFullYear()} Hacker Noon. All rights reserved.</em>`;

const getYear = () => {
  return new Date().getFullYear();
};

const copyrightsComponent = () => {
  return `<em>Copyright © ${getYear()} Hacker Noon. All rights reserved.</em>`;
};

export { copyrights, copyrightsComponent };
