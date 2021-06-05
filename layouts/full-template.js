function fullTemplate(body) {
  return `<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!-- NAME: 1 COLUMN -->
      <!--[if gte mso 15]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Low Code Isn’t Dead Yet: Or Is It?</title>
      <style type="text/css">
        p{
          margin:10px 0;
          padding:0;
        }
        table{
          border-collapse:collapse;
        }
        h1,h2,h3,h4,h5,h6{
          display:block;
          margin:0;
          padding:0;
        }
        img,a img{
          border:0;
          height:auto;
          outline:none;
          text-decoration:none;
        }
        body,#bodyTable,#bodyCell{
          height:100%;
          margin:0;
          padding:0;
          width:100%;
        }
        .mcnPreviewText{
          display:none !important;
        }
        #outlook a{
          padding:0;
        }
        img{
          -ms-interpolation-mode:bicubic;
        }
        table{
          mso-table-lspace:0pt;
          mso-table-rspace:0pt;
        }
        .ReadMsgBody{
          width:100%;
        }
        .ExternalClass{
          width:100%;
        }
        p,a,li,td,blockquote{
          mso-line-height-rule:exactly;
        }
        a[href^=tel],a[href^=sms]{
          color:inherit;
          cursor:default;
          text-decoration:none;
        }
        p,a,li,td,body,table,blockquote{
          -ms-text-size-adjust:100%;
          -webkit-text-size-adjust:100%;
        }
        .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
          line-height:100%;
        }
        a[x-apple-data-detectors]{
          color:inherit !important;
          text-decoration:none !important;
          font-size:inherit !important;
          font-family:inherit !important;
          font-weight:inherit !important;
          line-height:inherit !important;
        }
        #bodyCell{
          padding:10px;
        }
        .templateContainer{
          max-width:600px !important;
        }
        a.mcnButton{
          display:block;
        }
        .mcnImage,.mcnRetinaImage{
          vertical-align:bottom;
        }
        .mcnTextContent{
          word-break:break-word;
        }
        .mcnTextContent img{
          height:auto !important;
        }
        .mcnDividerBlock{
          table-layout:fixed !important;
        }
        body,#bodyTable{
          background-color:#ffffff;
        }
        #bodyCell{
          border-top:0;
        }
        .templateContainer{
          border:0;
        }
        h1{
          color:#111111;
          font-family:'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size:26px;
          font-style:normal;
          font-weight:bold;
          line-height:125%;
          letter-spacing:normal;
          text-align:left;
        }
        h2{
          color:#202020;
          font-family:Helvetica;
          font-size:22px;
          font-style:normal;
          font-weight:bold;
          line-height:125%;
          letter-spacing:normal;
          text-align:left;
        }
        h3{
          color:#202020;
          font-family:Helvetica;
          font-size:20px;
          font-style:normal;
          font-weight:bold;
          line-height:125%;
          letter-spacing:normal;
          text-align:left;
        }
        h4{
          color:#202020;
          font-family:Helvetica;
          font-size:18px;
          font-style:normal;
          font-weight:bold;
          line-height:125%;
          letter-spacing:normal;
          text-align:left;
        }
        #templatePreheader{
          background-color:#ffffff;
          background-image:none;
          background-repeat:no-repeat;
          background-position:center;
          background-size:cover;
          border-top:0;
          border-bottom:0;
          padding-top:9px;
          padding-bottom:9px;
        }
        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
          color:#656565;
          font-family:Helvetica;
          font-size:12px;
          line-height:150%;
          text-align:left;
        }
        #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
          color:#656565;
          font-weight:normal;
          text-decoration:underline;
        }
        #templateHeader{
          background-color:#ffffff;
          background-image:none;
          background-repeat:no-repeat;
          background-position:center;
          background-size:cover;
          border-top:0;
          border-bottom:0;
          padding-top:9px;
          padding-bottom:0;
        }
        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
          color:#111111;
          font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size:18px;
          line-height:150%;
          text-align:left;
        }
        #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
          color:#111111;
          font-weight:bold;
          text-decoration:underline;
        }
        #templateBody{
          background-color:#ffffff;
          background-image:none;
          background-repeat:no-repeat;
          background-position:center;
          background-size:cover;
          border-top:0;
          border-bottom:4px solid #00ff00;
          padding-top:0;
          padding-bottom:9px;
        }
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
          color:#111111;
          font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size:18px;
          line-height:150%;
          text-align:left;
        }
        #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
          color:#111111;
          font-weight:bold;
          text-decoration:underline;
        }
        #templateFooter{
          background-color:#ffffff;
          background-image:none;
          background-repeat:no-repeat;
          background-position:center;
          background-size:cover;
          border-top:0;
          border-bottom:0;
          padding-top:9px;
          padding-bottom:9px;
        }
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
          color:#656565;
          font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size:12px;
          line-height:150%;
          text-align:center;
        }
        #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
          color:#656565;
          font-weight:normal;
          text-decoration:underline;
        }
      @media only screen and (min-width:768px){
        .templateContainer{
          width:600px !important;
        }

      }	@media only screen and (max-width: 480px){
          body,table,td,p,a,li,blockquote{
            -webkit-text-size-adjust:none !important;
          }

      }	@media only screen and (max-width: 480px){
          body{
            width:100% !important;
            min-width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnRetinaImage{
            max-width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImage{
            width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
            max-width:100% !important;
            width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnBoxedTextContentContainer{
            min-width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageGroupContent{
            padding:9px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
            padding-top:9px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
            padding-top:18px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageCardBottomImageContent{
            padding-bottom:9px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageGroupBlockInner{
            padding-top:0 !important;
            padding-bottom:0 !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageGroupBlockOuter{
            padding-top:9px !important;
            padding-bottom:9px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnTextContent,.mcnBoxedTextContentColumn{
            padding-right:18px !important;
            padding-left:18px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
            padding-right:18px !important;
            padding-bottom:0 !important;
            padding-left:18px !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcpreview-image-uploader{
            display:none !important;
            width:100% !important;
          }

      }	@media only screen and (max-width: 480px){
          h1{
            font-size:22px !important;
            line-height:125% !important;
          }

      }	@media only screen and (max-width: 480px){
          h2{
            font-size:20px !important;
            line-height:125% !important;
          }

      }	@media only screen and (max-width: 480px){
          h3{
            font-size:18px !important;
            line-height:125% !important;
          }

      }	@media only screen and (max-width: 480px){
          h4{
            font-size:16px !important;
            line-height:150% !important;
          }

      }	@media only screen and (max-width: 480px){
          .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
          }

      }	@media only screen and (max-width: 480px){
          #templatePreheader{
            display:block !important;
          }

      }	@media only screen and (max-width: 480px){
          #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
          }

      }	@media only screen and (max-width: 480px){
          #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
            font-size:16px !important;
            line-height:150% !important;
          }

      }	@media only screen and (max-width: 480px){
          #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
            font-size:16px !important;
            line-height:150% !important;
          }

      }	@media only screen and (max-width: 480px){
          #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
          }

      }
    </style>
    <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
  </head>
  <body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;">
    <!--[if !gte mso 9]><!---->
    <span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">
      Throughout the years, there have been various attempts to make programming streamlined and digestible for everyone. Few people have the time and patience to hunch over the laptop for months, years, and zillion hours to acquire coding skills and know-how. This ushered in the budding trend of low-code platforms. The trend has quickly evolved towards data sciences and analytics, reducing the pressure, time, and cost.
    </span><!--<![endif]-->
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;">
        <tr>
          <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 10px;width: 100%;border-top: 0;">
            <!-- BEGIN TEMPLATE // -->
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
            <tr>
            <td align="center" valign="top" width="600" style="width:600px;">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;max-width: 600px !important;">
              <tr>
                <td valign="top" id="templatePreheader" style="background:#ffffff none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 9px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                  <tbody class="mcnImageBlockOuter">
                    <tr>
                      <td valign="top" style="padding: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <tbody>
                            <tr>
                              <td class="mcnImageContent" valign="top" style="padding-right: 0px;padding-left: 0px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <a href="https://www.hackernoon.com" title="" class="" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <img align="center" alt="Hacker Noon reflects the technology industry with unfettered stories and opinions written by real tech professionals" src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png" width="564" style="max-width: 15426px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage">
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" id="templateHeader" style="background:#ffffff none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 0;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <tbody class="mcnImageCardBlockOuter">
              <tr>
                <td class="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;
                  padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                </td>
              </tr>
            </tbody>
          </td>
        </tr>
      </table>
      ${body}
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;">
        <tr>
          <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 10px;width: 100%;border-top: 0;">
            <!-- BEGIN TEMPLATE // -->
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
            <tr>
            <td align="center" valign="top" width="600" style="width:600px;">
            <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;max-width: 600px !important;">
              <tr>
                <td>
                  <tbody>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <tbody class="mcnImageBlockOuter">
                        <tr>
                          <td valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner">
                            <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                              <tbody>
                                <tr>
                                  <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <a href="https://hackernoon.com/" title="" class="" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <img align="center" alt="Hacker Noon reflects the technology industry with unfettered stories and opinions written by real tech professionals" src="https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png" width="564" style="max-width: 15426px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage">
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tr>
                        <td valign="top" id="templateFooter" style="background:#ffffff none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #ffffff;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 9px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <tbody class="mcnFollowBlockOuter">
                            <tr>
                              <td align="center" valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowBlockInner">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="padding-left: 9px;padding-right: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContent">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding-top: 9px;padding-right: 9px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <!--[if mso]>
                                                        <table align="center" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                        <![endif]-->
                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                <a href="https://twitter.com/hackernoon" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                  <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-twitter-48.png" alt="Twitter" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class="">
                                                                                </a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->

                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                <a href="https://www.facebook.com/hackernoon" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                  <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-facebook-48.png" alt="Facebook" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class="">
                                                                                </a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->

                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                  <a href="https://instagram.com/hackernoon/" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-instagram-48.png" alt="Instagram" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->

                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                <a href="https://hackernoon.com" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                  <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-link-48.png" alt="Website" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class="">
                                                                                </a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->

                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                <a href="https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                  <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-youtube-48.png" alt="YouTube" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class="">
                                                                                </a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->

                                                        <!--[if mso]>
                                                        <td align="center" valign="top">
                                                        <![endif]-->
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td valign="top" style="padding-right: 0;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContentItemContainer">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="left" valign="middle" style="padding-top: 5px;padding-right: 10px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                          <tbody>
                                                                            <tr>
                                                                              <td align="center" valign="middle" width="24" class="mcnFollowIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                                <a href="mailto:stories@hackernoon.com" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/gray-forwardtofriend-48.png" alt="Email" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                              </td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <!--[if mso]>
                                                        </td>
                                                        <![endif]-->
                                                        <!--[if mso]>
                                                        </tr>
                                                        </table>
                                                        <![endif]-->
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </td>
                      </tr>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <tbody class="mcnTextBlockOuter">
                        <tr>
                          <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->

                            <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%" class="mcnTextContentContainer">
                              <tbody>
                                <tr>
                                  <td valign="top" class="mcnTextContent" style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #656565;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 12px;line-height: 150%;text-align: center;">
                                    <em>Copyright © 2021 Hacker Noon. All rights reserved.</em><br>
                                    <br>
                                    <strong>Our mailing address is:</strong><br>
                                    PO Box 2206, Edwards CO, 81632, U.S.A.<br>
                                    <br>
                                    <unsubscribe style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">unsubscribe</unsubscribe>
                                    <div style="text-align: center;"><br>
                                    <a href="https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #656565;font-weight: normal;text-decoration: underline;">Click Here To Sponsor A Newsletter by Hacker Noon</a></div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <!--[if mso]>
                            </td>
                            <![endif]-->

                            <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                    <!-- // END TEMPLATE -->
                  </tbody>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;
}

module.exports = { fullTemplate }