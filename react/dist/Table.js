'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var tableHorizontalName = 'horizontal';
var tableScrollableName = 'scrollable';
var tablePresetName = 'preset';

// Table component.
function Table(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.horizontal === 'undefined') outProps.horizontal = false;
	if (typeof outProps.scrollable === 'undefined') outProps.scrollable = false;
	if (typeof outProps.preset === 'undefined') outProps.preset = false;
	if (outProps.horizontal && outProps.scrollable) throw "Error: A 'Table' component cannot be scrollable and horizontal at the same time.";

	if (typeof outProps.className === 'undefined') {
		outProps.className = '';
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	} else {
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	}
	delete outProps.horizontal;
	delete outProps.scrollable;
	delete outProps.preset;
	return _react2.default.createElement('table', outProps, outProps.children);
}

exports.default = Table;