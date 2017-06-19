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
var navigationSublinkPrefix = 'sublink';

// NavigationBar component.
function NavigationBar(props) {
	var outProps = Object.assign({}, props);
	var childrenToRender = [];
	var temp = Array.isArray(outProps.children) ? outProps.children : [outProps.children];
	temp.forEach(function (child) {
		var navElement = Object.assign({}, child);
		var navElementProps = Object.assign({}, navElement.props);
		if (typeof navElementProps.sublink !== 'undefined') {
			if (typeof navElementProps.className === 'undefined') navElementProps.className = navigationSublinkPrefix + '-' + navElementProps.sublink;else navElementProps.className += ' ' + navigationSublinkPrefix + '-' + navElementProps.sublink;
			navElementProps.key = 'sublink_' + (0, _idGenerator2.default)();
			delete navElementProps.sublink;
			childrenToRender.push(_react2.default.createElement(navElement.type, navElementProps, navElementProps.children));
		} else childrenToRender.push(navElement);
	});
	return _react2.default.createElement('nav', outProps, childrenToRender);
}

exports.default = NavigationBar;