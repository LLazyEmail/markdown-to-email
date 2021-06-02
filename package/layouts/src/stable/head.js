const headStyles = require('./misc/head-styles');
const fonts = require('./misc/fonts');

module.exports = `<head>
<!-- NAME: 1 COLUMN -->
<!--[if gte mso 15]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG />
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
<![endif]-->
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The Secrets of High-Performing DevOps teams</title>
${headStyles}
<!--[if !mso]><!-->
${fonts}
<!--<![endif]-->
</head>`;
