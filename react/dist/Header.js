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
var headerStickyClassName = 'sticky';
var headerLogoClassName = 'logo';
var buttonClassName = 'button';

// Header component.
function Header(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky) if (typeof outProps.className === 'undefined') outProps.className = headerStickyClassName;else outProps.className += ' ' + headerStickyClassName;
	var childrenToRender = [];
	var temp = Array.isArray(outProps.children) ? outProps.children : [outProps.children];
	temp.forEach(function (child) {
		var headElement = Object.assign({}, child);
		var headElementProps = Object.assign({}, headElement.props);
		if (headElementProps.logo) {
			if (typeof headElementProps.className === 'undefined') headElementProps.className = headerLogoClassName;else headElementProps.className += ' ' + headerLogoClassName;
			headElementProps.key = 'logo_' + (0, _idGenerator2.default)();
			delete headElementProps.logo;
			childrenToRender.push(_react2.default.createElement(headElement.type, headElementProps, headElementProps.children));
		} else if (headElement.type == 'a' || headElement.type == 'label') {
			if (typeof headElementProps.className === 'undefined') headElementProps.className = buttonClassName;else headElementProps.className += ' ' + buttonClassName;
			headElementProps.key = 'button_' + (0, _idGenerator2.default)();
			childrenToRender.push(_react2.default.createElement(headElement.type, headElementProps, headElementProps.children));
		} else childrenToRender.push(headElement);
	});
	delete outProps.sticky;
	return _react2.default.createElement('header', outProps, childrenToRender);
}

exports.default = Header;