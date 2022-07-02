
import { Callbacks } from '../../../callbacksReact';

const {_strong,
    _link,
    _blockquote,
    _mem,
    _header,
    _italic,
    _del,
    _q,
    _code,
    _hr,
    _empty,
    //------------
    _ulList,
    _olList,
    //------------
    _image,
    _paragraphWrapper,
    _sponsorship,
    _br,
    //------------
    _separator,
} = Callbacks;

import {
    REGEXP_HEADER,
    REGEXP_IMAGE,
    REGEXP_LINK,
    REGEXP_STRONG,
    REGEXP_DEL,
    REGEXP_Q,
    REGEXP_CODE,
    REGEXP_UL_LIST,
    REGEXP_OL_LIST,
    REGEXP_BLOCKQUOTE,
    REGEXP_HR,
    REGEXP_BR,
    REGEXP_EM,
    REGEXP_SPONSORSHIP,
    REGEXP_MEM,
    REGEXP_PREVIEW_TEXT,
    REGEXP_PARAGRAPH,
    REGEXP_SEPARATOR,
  } from '../../constants/index';

  import {
    heading,
    image,
    italic,
    link,
    list,
    listItem,
    mainTitle,
    paragraph,
    strong,
    subtitle,
    q,
    del,
    code,
    blockquote,
    separator 
} from '../../../templates/NewsletterReactTemplate/typography';