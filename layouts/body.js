// const logoTop = require('./body/logoTop');

const wrapperLogoTop = require('./body/wrapperLogoTop');
const tableBottomWithDivider =  require('./body/table-bottom-with-divider');
const logoBottom = require('./body/logoBottom');
const tableBegin = require('./body/table-begin');
const footer = require('./body/footer');

module.exports = `<body
style="
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #ffffff;
"
>
<!--[if !gte mso 9]><!---->
{previewText}
<!--<![endif]-->

<center>

  ${tableBegin}

    <tr>
      <td
        align="center"
        valign="top"
        id="bodyCell"
        style="
          mso-line-height-rule: exactly;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          height: 100%;
          margin: 0;
          padding: 10px;
          width: 100%;
          border-top: 0;
        "
      >
        <!-- BEGIN TEMPLATE // -->
        <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                    <tr>
                    <td align="center" valign="top" width="600" style="width:600px;">
                    <![endif]-->
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          class="templateContainer"
          style="
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            border: 0;
            max-width: 600px !important;
          "
        >
          ${wrapperLogoTop}

          ${tableRowContent}

          <tr>
            <td
              valign="top"
              id="templateHeader"
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
                border-bottom: 0;
                padding-top: 9px;
                padding-bottom: 0;
              "
            >
            XXXXXXXXXXXXXXX
              {content}
              XXXXXXXXXXXXXXXXXXXXX
            </td>
          </tr>

          ${tableRowBottom}

          <tr>
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
          </tr>


          ${footer}
        </table>
        <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
        <!-- // END TEMPLATE -->
      </td>
    </tr>
  </table>
</center>
</body>`;
