import { logoTop, logoBottom, footer } from "./body/";

function getBody(parsedContent) {
  return `
<Body>${parsedContent}</Body>
    `;
}

export default getBody;
