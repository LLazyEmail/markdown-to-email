// import { mailingAddress } from '../config';
import { config } from '../config';

const address = `<strong>Our mailing address is:</strong>
<br>
${config.mailingAddress}`;

const addressComponent = (mailingAddress) => {
  return `<strong>Our mailing address is:</strong>
    <br>
    ${mailingAddress}`;
};

export { address, addressComponent };
