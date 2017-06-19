'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _idGenerator = require('./util/idGenerator');

var _idGenerator2 = _interopRequireDefault(_idGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';

// Checkbox component.
function Checkbox(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.labelText === 'undefined') throw "Error: The 'Checkbox' component's 'labelText' property is mandatory. Please specify a value.";
	if (typeof outProps.id === 'undefined') outProps.id = 'checkbox_' + (0, _idGenerator2.default)();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var checkboxProps = Object.assign({}, outProps);
	checkboxProps.key = outProps.id + '_input';
	checkboxProps.type = 'checkbox';
	delete checkboxProps.labelText;
	childrenToRender.push(_react2.default.createElement('input', checkboxProps));
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(_react2.default.createElement('label', labelProps, labelProps.children));
	return _react2.default.createElement('div', { className: outProps.className + ' ' + inputGroupClassName }, childrenToRender);
}

exports.default = Checkbox;