'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _divider = require('./body/divider');

var _divider2 = _interopRequireDefault(_divider);

var _index = require('./typography/image/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./typography/heading/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./typography/strong/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./body/sponsor/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./typography/mainTitle/index');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('./typography/paragraph/index');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
    return _react2.default.createElement(
        _body2.default,
        null,
        _react2.default.createElement(
            _index8.default,
            { leftHref: 'https://bit.ly/30AWyC4', rightHref: 'https://bit.ly/30AWyC4',
                leftSrc: 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png' },
            'Ship the data importer you always dreamed of'
        ),
        _react2.default.createElement(
            _index10.default,
            null,
            'Can We Make Data Tidy?'
        ),
        _react2.default.createElement(
            _index12.default,
            null,
            'Imagine: You are going to sit down with a newly-fetched data set, excited about the insights it will bring you and then you find out it is no use. If you\u2019ve been there, then you know for sure what an untidy dataset is.'
        ),
        _react2.default.createElement(_index2.default, { href: '#', src: 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg',
            alt: 'GIF' }),
        ' I',
        _react2.default.createElement(_divider2.default, null),
        _react2.default.createElement(
            _index12.default,
            null,
            'A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are inundated with it. As a result, our data science team becomes shortsighted and oops.. disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is by keeping data clean and organized.'
        ),
        _react2.default.createElement(
            _index4.default,
            null,
            _react2.default.createElement(
                _index6.default,
                null,
                'What is tidy data?'
            )
        ),
        _react2.default.createElement(
            _index12.default,
            null,
            'Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that statistician from NZ?). He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing allows you to easily produce charts, diagrams, and summary statistics. As it often happens, not all data comes out of the database clean, therefore cleansing it is essential to efficiently analyze it.'
        ),
        _react2.default.createElement(_index2.default, { href: '#', src: 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png' })
    );
}