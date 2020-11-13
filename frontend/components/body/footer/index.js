"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _copyrights = require("../../misc/copyrights");

var _copyrights2 = _interopRequireDefault(_copyrights);

var _address = require("../../misc/address");

var _address2 = _interopRequireDefault(_address);

var _unsubscribe = require("../../misc/unsubscribe");

var _unsubscribe2 = _interopRequireDefault(_unsubscribe);

var _newsletterSponsorshipLink = require("../../misc/newsletter-sponsorship-link");

var _newsletterSponsorshipLink2 = _interopRequireDefault(_newsletterSponsorshipLink);

var _tableLeft = require("./tableLeft");

var _tableLeft2 = _interopRequireDefault(_tableLeft);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "table",
            { border: 0, cellPadding: 0, cellSpacing: 0, width: "100%", className: "mcnFollowBlock",
                style: _styles2.default.followBlock },
            _react2.default.createElement(
                "tbody",
                { className: "mcnFollowBlockOuter" },
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        { align: "center", valign: "top", style: _styles2.default.followBlockInner, className: "mcnFollowBlockInner" },
                        _react2.default.createElement(
                            "table",
                            { border: 0, cellPadding: 0, cellSpacing: 0, width: "100%",
                                className: "mcnFollowContentContainer", style: _styles2.default.followContentContainer },
                            _react2.default.createElement(
                                "tbody",
                                null,
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { align: "center", style: _styles2.default.tdCenter },
                                        _react2.default.createElement(
                                            "table",
                                            { border: 0, cellPadding: 0, cellSpacing: 0, width: "100%",
                                                style: _styles2.default.followContent, className: "mcnFollowContent" },
                                            _react2.default.createElement(
                                                "tbody",
                                                null,
                                                _react2.default.createElement(
                                                    "tr",
                                                    null,
                                                    _react2.default.createElement(
                                                        "td",
                                                        { align: "center", valign: "top", style: _styles2.default.tdCenterTop },
                                                        _react2.default.createElement(
                                                            "table",
                                                            { align: "center", border: 0, cellPadding: 0, cellSpacing: 0,
                                                                style: _styles2.default.tableCenter },
                                                            _react2.default.createElement(
                                                                "tbody",
                                                                null,
                                                                _react2.default.createElement(
                                                                    "tr",
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        "td",
                                                                        { align: "center", valign: "top", style: _styles2.default.tdCenterTop2 },
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "https://twitter.com/hackernoon",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-twitter-48.png",
                                                                            alt: "Twitter"
                                                                        }),
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "https://www.facebook.com/hackernoon",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-facebook-48.png",
                                                                            alt: "Facebook"
                                                                        }),
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "https://instagram.com/hackernoon/",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-instagram-48.png",
                                                                            alt: "Instagram"
                                                                        }),
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "http://hackernoon.com",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-link-48.png",
                                                                            alt: "Website"
                                                                        }),
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-youtube-48.png",
                                                                            alt: "YouTube"
                                                                        }),
                                                                        _react2.default.createElement(_tableLeft2.default, {
                                                                            href: "mailto:stories@hackernoon.com",
                                                                            src: "https://cdn-images.mailchimp.com/icons/social-block-v2/gray-forwardtofriend-48.png",
                                                                            alt: "Email"
                                                                        })
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            "table",
            { border: 0, cellPadding: 0, cellSpacing: 0, width: "100%", className: "mcnTextBlock",
                style: _styles2.default.textBlock },
            _react2.default.createElement(
                "tbody",
                { className: "mcnTextBlockOuter" },
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "td",
                        { valign: "top", className: "mcnTextBlockInner", style: _styles2.default.textBlockInner },
                        _react2.default.createElement(
                            "table",
                            { align: "left", border: 0, cellPadding: 0, cellSpacing: 0,
                                style: _styles2.default.textContentContainer, width: "100%", className: "mcnTextContentContainer" },
                            _react2.default.createElement(
                                "tbody",
                                null,
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { valign: "top", className: "mcnTextContent", style: _styles2.default.textContent },
                                        _react2.default.createElement(_copyrights2.default, null),
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(_address2.default, null),
                                        _react2.default.createElement("br", null),
                                        _react2.default.createElement(_unsubscribe2.default, null),
                                        _react2.default.createElement(_newsletterSponsorshipLink2.default, null)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

exports.default = Footer;