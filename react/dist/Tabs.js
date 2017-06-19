'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tabs = exports.Tab = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _idGenerator = require('./util/idGenerator');

var _idGenerator2 = _interopRequireDefault(_idGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var tabsClassName = 'tabs';
var tabsStackedClassName = 'stacked';

// Technically speaking, the Tab is a non-component, meaning it should not be
// rendered on its own. It depends on the Tabs component for proper rendering.
function Tab(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.checked === 'undefined') outProps.checked = false;
	if (typeof outProps.defaultChecked === 'undefined') outProps.defaultChecked = false;
	if (typeof outProps.tabTitle === 'undefined') throw "Error: The 'tabTitle' property of the 'Tab' component is mandatory.";
	delete outProps.tabTitle;
	return _react2.default.createElement('div', outProps, outProps.children);
}

// Tabs component.
function Tabs(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.stacked === 'undefined') outProps.stacked = false;
	if (typeof outProps.multiple === 'undefined') outProps.multiple = false;
	var group = 'tab_group_' + (0, _idGenerator2.default)();
	var children = [];
	var temp = Array.isArray(outProps.children) ? outProps.children : [outProps.children];
	temp.forEach(function (child) {
		if (!child instanceof Tab) throw "Error: All children of a 'Tabs' component must be 'Tab' components.";
		var tab = Object.assign({}, child);
		tab.internalId = 'tab_' + (0, _idGenerator2.default)();
		children.push(tab);
	});
	var childrenToRender = [];
	var tabbingType = outProps.multiple && outProps.stacked ? 'checkbox' : 'radio';
	var hasChecked = false;
	children.forEach(function (child) {
		if (child.props.checked || child.props.defaultChecked) hasChecked = true;
		childrenToRender.push(_react2.default.createElement('input', {
			type: tabbingType,
			name: group,
			key: child.internalId + '_input',
			id: child.internalId,
			defaultChecked: child.props.checked || child.props.defaultChecked ? true : false,
			'aria-hidden': 'true' }));
		childrenToRender.push(_react2.default.createElement('label', {
			'htmlFor': child.internalId,
			key: child.internalId + '_label',
			'aria-hidden': 'true'
		}, child.props.tabTitle));
		var childProps = Object.assign({}, child.props);
		childProps.key = child.internalId + '_content';
		delete childProps.tabTitle;
		childrenToRender.push(_react2.default.createElement('div', childProps, childProps.children));
	});
	if (!hasChecked && !outProps.multiple) childrenToRender[0] = _react2.default.createElement('input', {
		type: tabbingType,
		name: group,
		key: children[0].internalId,
		id: children[0].internalId,
		defaultChecked: true,
		'aria-hidden': 'true'
	});
	if (typeof outProps.className === 'undefined') outProps.className = outProps.stacked ? tabsClassName + ' ' + tabsStackedClassName : tabsClassName;else outProps.className += outProps.stacked ? ' ' + tabsClassName + ' ' + tabsStackedClassName : tabsClassName;
	delete outProps.stacked;
	delete outProps.multiple;
	return _react2.default.createElement('div', outProps, childrenToRender);
}

exports.Tab = Tab;
exports.Tabs = Tabs;