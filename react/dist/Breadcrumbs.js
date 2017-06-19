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
var breadcrumbsClassName = 'breadcrumbs';

// Breadcrumbs component.
function Breadcrumbs(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined') outProps.className = breadcrumbsClassName;else outProps.className += ' ' + breadcrumbsClassName;
	if (typeof outProps.id === 'undefined') outProps.id = 'breadcrumbs_' + (0, _idGenerator2.default)();
	outProps.childrenToRender = [];
	var temp = Array.isArray(outProps.children) ? outProps.children : [outProps.children];
	temp.forEach(function (child) {
		var breadcrumb = Object.assign({}, child);
		outProps.childrenToRender.push(_react2.default.createElement('li', { key: outProps.id + '_breadcrumb_' + (0, _idGenerator2.default)() }, breadcrumb));
	});
	var childrenToRender = outProps.childrenToRender;
	delete outProps.childrenToRender;
	return _react2.default.createElement('ul', outProps, childrenToRender);
}

exports.default = Breadcrumbs;