'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DrawerToggle = exports.Drawer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _idGenerator = require('./util/idGenerator');

var _idGenerator2 = _interopRequireDefault(_idGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var drawerToggleClassName = 'drawer-toggle';
var drawerClassName = 'drawer';
var drawerRightClassName = 'right';
var drawerPersistenClassName = 'persistent';
var drawerCloseName = 'close';

// DrawerToggle component.
function DrawerToggle(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps['htmlFor'] === 'undefined') throw "Error: A 'DrawerToggle' component must have an 'htmlFor' attribute.";
	if (typeof outProps.className === 'undefined') outProps.className = drawerToggleClassName;else outProps.className += ' ' + drawerToggleClassName;
	if (typeof outProps.persistent === 'undefined') outProps.persistent = false;
	if (outProps.persistent) outProps.className += ' ' + drawerPersistenClassName;
	delete outProps.persistent;
	return _react2.default.createElement('label', outProps);
}

// Drawer component.
function Drawer(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') throw "Error: A 'Drawer' component must have an 'id' attribute.";
	if (typeof outProps.className === 'undefined') outProps.className = drawerClassName;else outProps.className += ' ' + drawerClassName;
	if (typeof outProps.right === 'undefined') outProps.right = false;
	if (typeof outProps.persistent === 'undefined') outProps.persistent = false;
	if (outProps.right) outProps.className += ' ' + drawerRightClassName;
	if (outProps.persistent) outProps.className += ' ' + drawerPersistenClassName;
	var childrenToRender = [];
	childrenToRender.push(_react2.default.createElement('input', {
		id: outProps.id,
		type: 'checkbox',
		key: outProps.id + (0, _idGenerator2.default)() + '_checkbox'
	}));
	var children = Array.isArray(outProps.children) ? outProps.children : [outProps.children];
	children.push(_react2.default.createElement('label', {
		'htmlFor': outProps.id,
		className: drawerCloseName,
		key: outProps.id + (0, _idGenerator2.default)() + '_close'
	}));
	delete outProps.id;
	delete outProps.right;
	delete outProps.persistent;
	outProps.key = outProps.id + (0, _idGenerator2.default)() + '_drawer';
	childrenToRender.push(_react2.default.createElement('div', outProps, children));
	return _react2.default.createElement('div', {}, childrenToRender);
}

exports.Drawer = Drawer;
exports.DrawerToggle = DrawerToggle;