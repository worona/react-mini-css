'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var tooltipClassName = 'tooltip';
var tooltipBottomClassName = 'bottom';

// Tooltip component.
function Tooltip(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.tooltipText === 'undefined') throw "Error: The 'Tooltip' component's 'tooltipText' property is mandatory. Please specify a value.";
	if (typeof outProps.bottom === 'undefined') outProps.bottom = false;
	if (typeof outProps.className === 'undefined') outProps.className = outProps.bottom ? tooltipClassName + ' ' + tooltipBottomClassName : tooltipClassName;else outProps.className += outProps.bottom ? ' ' + tooltipClassName + ' ' + tooltipBottomClassName : tooltipClassName;
	outProps['aria-label'] = outProps.tooltipText;
	delete outProps.tooltipText;
	delete outProps.bottom;
	return _react2.default.createElement('span', outProps, outProps.children);
}

exports.default = Tooltip;