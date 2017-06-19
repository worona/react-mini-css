'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var closeClassName = 'close';

// Close component.
function Close(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.children !== 'undefined') throw "Error: A 'Close' component must not have any children.";
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'span';
	if (typeof outProps.className === 'undefined') outProps.className = closeClassName;else outProps.className += ' ' + closeClassName;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return _react2.default.createElement(elementType, outProps, outProps.children);
}

exports.default = Close;