'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var inputGroupFluidClassName = 'fluid';
var inputGroupVerticalClassName = 'vertical';

// InputGroup component.
function InputGroup(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.fluid === 'undefined') outProps.fluid = false;
	if (typeof outProps.vertical === 'undefined') outProps.vertical = false;
	if (outProps.fluid && outProps.vertical) throw "Error: A 'Table' component cannot be fluid and vertical at the same time.";
	if (typeof outProps.className === 'undefined') outProps.className = inputGroupClassName;else outProps.className += ' ' + inputGroupClassName;
	if (outProps.fluid) outProps.className += ' ' + inputGroupFluidClassName;
	if (outProps.vertical) outProps.className += ' ' + inputGroupVerticalClassName;
	delete outProps.fluid;
	delete outProps.vertical;
	return _react2.default.createElement('div', outProps, outProps.children);
}

exports.default = InputGroup;