const tableBottomWithDivider =  require('./table-bottom-with-divider');
const logoBottom = require('./logoBottom');

module.exports = `         <tr>
          <td
            valign="top"
            id="templateBody"
            style="
              background: #ffffff none no-repeat center/cover;
              mso-line-height-rule: exactly;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              background-color: #ffffff;
              background-image: none;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              border-top: 0;
              border-bottom: 4px solid #00ff00;
              padding-top: 0;
              padding-bottom: 9px;
            "
          >

          ${tableBottomWithDivider}

            ${logoBottom}
          </td>
        </tr> `;
