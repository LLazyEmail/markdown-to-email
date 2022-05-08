const mainComponent = (headComponent, bodyComponent) => {
  return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    ${headComponent}
    ${bodyComponent}
  </html>`;
};

export default mainComponent;
