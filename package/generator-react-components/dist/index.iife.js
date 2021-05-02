var newsletterLayoutsReact = (function () {
  'use strict';

  var copyrights = `<Copyright />`;

  var copyrights$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), copyrights, {
    'default': copyrights
  }));

  var config = {
    contact: "https://sponsor.hackernoon.com/newsletter?ref=noonifications.tech",
    mailingAddress: "PO Box 2206, Edwards CO, 81632, U.S.A.",
    unsubscribe: '#'
  };
  var config_1 = config;

  var address = `<Address />
${config_1.mailingAddress}`;

  var address$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), address, {
    'default': address
  }));

  var unsubscribe = `<Unsubscribe />`;

  var unsubscribe$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), unsubscribe, {
    'default': unsubscribe
  }));

  var newsletterSponsorshipLink = `<NewsletterSponsorshipLink />`;

  var newsletterSponsorshipLink$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), newsletterSponsorshipLink, {
    'default': newsletterSponsorshipLink
  }));

  var footer = `<Footer>{children}</Footer>`;

  var footer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), footer, {
    'default': footer
  }));

  var headline = 
`<HeadLine />`  ;

  var headline$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), headline, {
    'default': headline
  }));

  var logoBottom = `<Logo />`;

  var logoBottom$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), logoBottom, {
    'default': logoBottom
  }));

  var logoTop = `<Logo />`;

  var logoTop$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), logoTop, {
    'default': logoTop
  }));

  var previewText = `<PreviewText>{content}</PreviewText>`;

  var previewText$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), previewText, {
    'default': previewText
  }));

  var section = `<Section>{content}</Section>`;

  var section$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), section, {
    'default': section
  }));

  var sponsor = `<Sponsor param="{content}" />`;

  var sponsor$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), sponsor, {
    'default': sponsor
  }));

  var index = {
      footer: footer$1,
      headline: headline$1,
      logoBottom: logoBottom$1,
      logoTop: logoTop$1,
      previewText: previewText$1,
      section: section$1,
      sponsor: sponsor$1
  };

  var body = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index
  });

  var fonts = `<link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i" rel="stylesheet">`;

  var fonts$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), fonts, {
    'default': fonts
  }));

  var headStyles = `<style type="text/css">
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

}</style>`;

  var headStyles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), headStyles, {
    'default': headStyles
  }));

  var index$1 = {
      address: address$1,
      copyrights: copyrights$1,
      fonts: fonts$1,
      headStyles: headStyles$1,
      newsletterSponsorshipLink: newsletterSponsorshipLink$1,
      unsubscribe: unsubscribe$1,
  };

  var misc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$1
  });

  var heading= `<Heading>{content}</Heading>`;

  var heading$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), heading, {
    'default': heading
  }));

  var image = `      <Image
        href="{}"
        src="https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg"
        alt="{}"
      />`;

  var image$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), image, {
    'default': image
  }));

  var italic = `<Italic>{content}</Italic>`;

  var italic$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), italic, {
    'default': italic
  }));

  var link = `<Link href="{href}" />`;

  var link$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), link, {
    'default': link
  }));

  var list = `<List>{content}</List>`;

  var list$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), list, {
    'default': list
  }));

  var listItem = `<ListItem>{content}</ListItem>`;

  var listItem$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), listItem, {
    'default': listItem
  }));

  var mainTitle= `<MainTitle>{content}</MainTitle>`;

  var mainTitle$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), mainTitle, {
    'default': mainTitle
  }));

  var paragraph = `<Paragraph>{content}</Paragraph>`;

  var paragraph$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), paragraph, {
    'default': paragraph
  }));

  var strong = `<Strong>{content}</Strong>`;

  var strong$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), strong, {
    'default': strong
  }));

  var subtitle = `<SubTitle>{content}</SubTitle>`;

  var subtitle$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), subtitle, {
    'default': subtitle
  }));

  var index$2 = {
      heading: heading$1,
      image: image$1,
      italic: italic$1,
      link: link$1,
      list: list$1,
      listItem: listItem$1,
      mainTitle: mainTitle$1,
      paragraph: paragraph$1,
      strong: strong$1,
      subtitle: subtitle$1
  };

  var typography = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$2
  });

  var index$3 = {
    body: body,
    misc: misc,
    typography: typography
  };

  return index$3;

}());
