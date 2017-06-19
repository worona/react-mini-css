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
var switchClassName = 'switch';

// Switch component.
function Switch(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'switch_' + (0, _idGenerator2.default)();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var switchProps = Object.assign({}, outProps);
	switchProps.key = outProps.id + '_input';
	if (typeof switchProps.type === 'undefined' || switchProps.type != 'radio') switchProps.type = 'checkbox';
	delete switchProps.labelText;
	childrenToRender.push(_react2.default.createElement('input', switchProps));
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + switchClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	delete labelProps.type;
	childrenToRender.push(_react2.default.createElement('label', labelProps, labelProps.children));
	return _react2.default.createElement('div', { className: outProps.className + ' ' + inputGroupClassName }, childrenToRender);
}

exports.default = Switch;