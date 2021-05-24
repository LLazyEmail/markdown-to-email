import {
newLine
} from '../helpers';

import {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
  previewText,
  separator
} from './callbacks-simpleMDReact';

import {
  image,
  paragraphWrapper,
  sponsorship,
  br
} from './callbacksMDReact';

import {
  ulList,
  olList
} from './callbacks-lists-react';

import * as constants from 'atherdon-newsletter-constants';

class ReactReplacer {
    constructor(constants){
        this._constants = constants;

        this.replaceMDBinded = () => {};
        this.replaceMDBindedPreviewText = () => {};

        this.previewText = function () {
            this.replaceMDBinded(this._constants.REGEXP_PREVIEW_TEXT, previewText);
        };

        this.comments = function () {
            this.replaceMDBinded(this._constants.REGEXP_HTML_COMMENTS, empty);
        };

        this.strong = function () {
            this.replaceMDBinded(this._constants.REGEXP_STRONG, strong);
        };

        this.italic = function () {
            this.replaceMDBinded(this._constants.REGEXP_EM, italic);
        };

        this.header = function () {
            this.replaceMDBinded(this._constants.REGEXP_HEADER, header);
        };

        this.image = function () {
            this.replaceMDBinded(this._constants.REGEXP_IMAGE, image);
        };

        this.link = function () {
            this.replaceMDBinded(this._constants.REGEXP_LINK, link);
        };

        this.del = function () {
            this.replaceMDBinded(this._constants.REGEXP_DEL, del);
        };

        this.q = function () {
            this.replaceMDBinded(this._constants.REGEXP_Q, q);
        };

        this.code = function () {
            this.replaceMDBinded(this._constants.REGEXP_CODE, code);
        };

        this.ulList = function () {
            this.replaceMDBinded(this._constants.REGEXP_UL_LIST, ulList);
        };

        this.olList = function () {
            this.replaceMDBinded(this._constants.REGEXP_OL_LIST, olList);
        };

        this.blockQuote = function () {
            this.replaceMDBinded(this._constants.REGEXP_BLOCKQUOTE, blockquote);
        };

        this.hr = function () {
            this.replaceMDBinded(this._constants.REGEXP_HR, hr);
        };

        this.paragraph = function () {
            this.replaceMDBinded(this._constants.REGEXP_PARAGRAPH, paragraphWrapper);
        };

        this.emptyUl = function () {
            this.replaceMDBinded(this._constants.REGEXP_EMPTY_UL, empty);
        };

        this.emptyOl = function () {
            this.replaceMDBinded(this._constants.REGEXP_EMPTY_OL, empty);
        };

        this.emptyBlockQuote = function () {
            this.replaceMDBinded(this._constants.REGEXP_EMPTY_BLOCKQUOTE, newLine);
        };

        this.br = function () {
            this.replaceMDBinded(this._constants.REGEXP_BR, br);
        };

        this.sponsorship = function () {
            this.replaceMDBinded(this._constants.REGEXP_SPONSORSHIP, sponsorship);
        };

        this.mem = function () {
            this.replaceMDBinded(this._constants.REGEXP_MEM, mem);
        };

        this.separator = function () {
            this.replaceMDBinded(this._constants.REGEXP_SEPARATOR, separator);
        };

    }
}

export default new ReactReplacer(constants);
