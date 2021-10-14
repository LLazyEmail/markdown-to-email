import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";


const REGEXP_SECTION_TAGS = /^<\/?(ul|ol|li|h|p|bl)/i;
const REGEXP_IMAGE_TOOLTIP = /\"image_tooltip\"/;
const REGEXP_NEWLINE = newLine + 'g';

// const REGEXP_SPONSORHSHIP = 

export default {
  REGEXP_SECTION_TAGS,
  REGEXP_IMAGE_TOOLTIP,
  REGEXP_NEWLINE
}
