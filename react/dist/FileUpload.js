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
var buttonClassName = 'button';

// FileUpload component.
function FileUpload(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'fileupload_' + (0, _idGenerator2.default)();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var fileUploadProps = Object.assign({}, outProps);
	fileUploadProps.key = outProps.id + '_input';
	fileUploadProps.type = 'file';
	delete fileUploadProps.labelText;
	childrenToRender.push(_react2.default.createElement('input', fileUploadProps));
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + buttonClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(_react2.default.createElement('label', labelProps, labelProps.children));
	return _react2.default.createElement('div', { className: outProps.className + ' ' + inputGroupClassName }, childrenToRender);
}

exports.default = FileUpload;