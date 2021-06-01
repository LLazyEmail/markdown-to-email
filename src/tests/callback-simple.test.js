const { strong, link, blockquote, mem, header } = require('../callbacks-simple');
const { newLine } = require('../utils');

describe('testing callback-simple', () => {
  test('strong returns a <strong> with text', () => {
    const str = strong('', '', 'hello ', 'world');
    expect(str).toBe("<strong style=\"font-weight: bolder;\">hello world</strong>");
  })
  test('link return a link element ', () => {
    const lnk = link('', 'google', 'google.com');
    expect(lnk).toBe('<a href=\"google.com\" target=\"_blank\" style=\"mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;\">google</a>');
  })
  test('blockquote returns a blockquote element', () => {
    const block = blockquote('', '', 'hello world');
    expect(block).toBe(`${newLine}<blockquote>hello world</blockquote>`);
  })
  test('mem returns a mem element', () => {
    const memExample = `<p dir=\"ltr\" style=\"text-align: center;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;\"><span style=\"font-family:georgia,times,times new roman,serif\"><span style=\"font-size:17px\"><a href=\"./sss\" target=\"_blank\" style=\"mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;\"><img data-file-id=\"1041068\" src=\"./ss\" style=\"border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;\" alt=\"image\"></a></span></span></p>`;
    const m = mem('', './ss', './sss', 'image');
    expect(m).toBe(memExample);
  })
  test('header renders all 3 titleTypes correctly', () => {
    const mainTitle = header('', [0], 'hello');
    const subtitle = header('', [0, 0], 'hello');
    const heading = header('', [0, 0, 0], 'hello');
    expect(mainTitle).toBe(`${newLine}<h1 class="mc-toc-title" dir="ltr" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:30px">hello</span></span></h1>`);
    expect(subtitle).toBe(`${newLine}<p dir="ltr" style="text-align: left;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;"><span style="font-size:17px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><strong id="docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2">hello</strong></span></span></p>`);
    expect(heading).toBe(`${newLine}<h3 class="mc-toc-title" dir="ltr" style="text-align: left;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:18px">hello</span></span></h3>`);
  })
})
