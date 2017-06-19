'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module constants (change according to your flavor file)
var gridContainerClassName = 'container';

// GridContainer component.
function GridContainer(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined') outProps.className = gridContainerClassName;else outProps.className += ' ' + gridContainerClassName;
	return _react2.default.createElement('div', outProps, outProps.children);
}

exports.default = GridContainer;