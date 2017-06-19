'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var toastClassName = 'toast';

// Toast component.
function Toast(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined') outProps.className = toastClassName;else outProps.className += ' ' + toastClassName;
	return _react2.default.createElement('span', outProps, outProps.children);
}

exports.default = Toast;