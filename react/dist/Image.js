'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Image component.
function Image(props) {
	var outProps = Object.assign({}, props);
	if (typeof outProps.src === 'undefined') throw "Error: An 'Image' component must have a 'src' property.";
	if (typeof outProps.alt === 'undefined' && typeof outProps.description === 'undefined') throw "Error: An 'Image' component must have an 'alt' and/or 'description' property.";
	if (typeof outProps.alt === 'undefined') outProps.alt = outProps.description;
	if (typeof outProps.description === 'undefined') outProps.description = outProps.alt;
	if (typeof outProps.id === 'undefined') outProps.id = 'image_' + generateUniqueId();
	var imgProps = Object.assign({}, outProps);
	delete imgProps.description;
	imgProps.id += '_img';
	imgProps.key += imgProps.id;
	outProps.children = [];
	outProps.children.push(_react2.default.createElement('img', imgProps));
	outProps.children.push(_react2.default.createElement('figcaption', {
		id: outProps.id + '_figcaption',
		key: outProps.id + '_figcaption'
	}, outProps.description));
	delete outProps.description;
	return _react2.default.createElement('figure', outProps, outProps.children);
}

exports.default = Image;