'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var progressMaxValue = 1000;
// Progress component.
function Progress(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.max === 'undefined') outProps.max = progressMaxValue;
	if (typeof outProps.value === 'undefined') outProps.value = 0;
	var isPercentage = false;
	if (/^\d+(\.\d+)?%$/.test(outProps.value)) {
		outProps.value = outProps.value.slice(0, -1);
		isPercentage = true;
	}
	if (!isPercentage && parseInt(outProps.value) >= parseInt(outProps.max)) throw "Error: The 'value' property of a 'Progress' element must be less or equal to its 'max' property.";
	if (outProps.max != progressMaxValue) {
		if (isPercentage) outProps.value = outProps.value / 100 * progressMaxValue;else {
			outProps.value = progressMaxValue / outProps.max * outProps.value;
		}
		outProps.max = progressMaxValue;
	} else if (isPercentage) outProps.value = outProps.value / 100 * progressMaxValue;
	return _react2.default.createElement('progress', outProps, outProps.children);
}

exports.default = Progress;