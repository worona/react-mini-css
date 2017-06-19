'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var footerStickyClassName = 'sticky';

// Footer component.
function Footer(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky) if (typeof outProps.className === 'undefined') outProps.className = footerStickyClassName;else outProps.className += ' ' + footerStickyClassName;
	delete outProps.sticky;
	return _react2.default.createElement('footer', outProps, outProps.children);
}

exports.default = Footer;