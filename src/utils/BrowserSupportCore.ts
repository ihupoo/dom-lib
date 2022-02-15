import getVendorPrefixedName from './getVendorPrefixedName'

const BrowserSupportCore = {
	/**
	 * @return {bool} True if browser supports css animations.
	 */
	hasCSSAnimations: () => !!getVendorPrefixedName('animationName'),

	/**
	 * @return {bool} True if browser supports css transforms.
	 */
	hasCSSTransforms: () => !!getVendorPrefixedName('transform'),

	/**
	 * @return {bool} True if browser supports css 3d transforms.
	 */
	hasCSS3DTransforms: () => !!getVendorPrefixedName('perspective'),

	/**
	 * @return {bool} True if browser supports css transitions.
	 */
	hasCSSTransitions: () => !!getVendorPrefixedName('transition'),
}

export default BrowserSupportCore
