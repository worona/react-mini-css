'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Section = exports.Card = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var cardClassName = 'card';
var sectionClassName = 'section';

// Card component.
function Card(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;else outProps.className += ' ' + cardClassName;
	return _react2.default.createElement('div', outProps, outProps.children);
}
// Section component.
function Section(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined') outProps.className = sectionClassName;else outProps.className += ' ' + sectionClassName;
	return _react2.default.createElement('div', outProps, outProps.children);
}

exports.Card = Card;
exports.Section = Section;