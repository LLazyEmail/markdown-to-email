
const imageComponent = (src, altText) => {
    return `<p dir="ltr" style="text-align: center;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="{href}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;"><img data-file-id="1041068" src="${src}" style="border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" alt="${altText}"></a></span></span></p>`;
}

export default imageComponent;
