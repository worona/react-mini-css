let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var tooltipClassName = 'tooltip';
var tooltipBottomClassName = 'bottom';

// Tooltip component.
function Tooltip(attributes) {
	var outProps = Object.assign({},attributes);
	if (typeof outProps.tooltipText === 'undefined') throw "Error: The 'Tooltip' component's 'tooltipText' property is mandatory. Please specify a value.";
	if (typeof outProps.bottom === 'undefined') outProps.bottom = false;
	if (typeof outProps.className === 'undefined')
		outProps.className = (outProps.bottom) ? (tooltipClassName + ' ' + tooltipBottomClassName) : tooltipClassName;
	else
		outProps.className += (outProps.bottom) ? (' ' + tooltipClassName + ' ' + tooltipBottomClassName) : tooltipClassName;
	outProps['aria-label'] = outProps.tooltipText;
	delete outProps.tooltipText;
	delete outProps.bottom;
	return h(
		'span',outProps, outProps.children
	);
}
