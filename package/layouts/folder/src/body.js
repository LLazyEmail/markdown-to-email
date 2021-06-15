import body from 'atherdon-newsletter-js-layouts-body';

import footer from 'atherdon-newsletter-js-layouts-footer';

const { logoTop, logoBottom } = body;

export const BBBody = `<body
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
  <table
    align="center"
    border="0"
    cellpadding="0"
    cellspacing="0"
    height="100%"
    width="100%"
    id="bodyTable"
    style="
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: #ffffff;
    "
  >
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
          <tr>
            <td
              valign="top"
              id="templatePreheader"
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
                padding-bottom: 9px;
              "
            >
              ${logoTop}
            </td>
          </tr>
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
              {content}
            </td>
          </tr>
          <tr>
            <td valign="top" class="mcnTextBlockInner"
                style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->

                <!--[if mso]>
                <td valign="top" width="600" style="width:600px;">
                <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0"
                  style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                  width="100%" class="mcnTextContentContainer">
                  <tbody>
                    <tr>

                      <td valign="top" style="padding: 0px 18px 9px;line-height: 150%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">

                        <p dir="ltr"
                          style="text-align: left;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;">
                          <span style="font-size:17px"><span
                              style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><strong
                                id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2"><strong style="font-weight: bolder;">Ready to
                                  Claim Your Internet Name on Hacker Noon?</strong></strong></span></span>
                        </p>
                        
                        <div dir="ltr" style="text-align: justify;">

                          <ol>
                            <li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"> <a href="https://hackernoon.com/signup?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;text-decoration: underline;">Create a free account</a>.</p>
                            </li>
                            <li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://app.hackernoon.com/subscriptions?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;text-decoration: underline;">Tell us what you want to read about</a>.</p>
                            </li>
                            <li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://app.hackernoon.com/new?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;text-decoration: underline;">Submit your own tech stories</a>. </p>
                            </li>
                            <li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;"><a href="https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;text-decoration: underline;">Gain Access to Brand-As-Author</a>™ Program. </p>
                            </li>
                            <li dir="ltr" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <p dir="ltr" role="presentation" style="line-height: 125%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;">Get Your Tech Stories Featured on the <a href="https://hackernoon.com/?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;text-decoration: underline;">Homepage of Hacker Noon</a>.</p>
                            </li>
                          </ol>  

                        </div>
                        <br />
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--[if mso]>
                </td>
                <![endif]-->

                <!--[if mso     ]>
                </tr>
                </table>
                <![endif]-->
              </td>
            </tr>
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
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                class="mcnDividerBlock"
                style="
                  min-width: 100%;
                  border-collapse: collapse;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                  table-layout: fixed !important;
                "
              >
                <tbody class="mcnDividerBlockOuter">
                  <tr>
                    <td
                      class="mcnDividerBlockInner"
                      style="
                        min-width: 100%;
                        padding: 12px 18px;
                        mso-line-height-rule: exactly;
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                      "
                    >
                      <table
                        class="mcnDividerContent"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="
                          min-width: 100%;
                          border-top: 2px none #eaeaea;
                          border-collapse: collapse;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                mso-line-height-rule: exactly;
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                              "
                            >
                              <span></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--
            <td class="mcnDividerBlockInner" style="padding: 18px;">
            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
                    </td>
                  </tr>
                </tbody>
              </table>
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
