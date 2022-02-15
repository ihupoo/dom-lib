import canUseDOM from '../canUseDOM'

let useHasFeature: boolean
if (canUseDOM) {
	useHasFeature =
		document.implementation &&
		document.implementation.hasFeature &&
		// always returns true in newer browsers as per the standard.
		// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
		document.implementation.hasFeature('', '') !== true
}

function isEventSupported(eventNameSuffix: string, capture?: boolean) {
	if (!canUseDOM || (capture && !('addEventListener' in document))) {
		return false
	}

	const eventName = `on${eventNameSuffix}`
	let isSupported = eventName in document

	if (!isSupported) {
		const element = document.createElement('div')
		element.setAttribute(eventName, 'return;')
		isSupported = typeof element[eventName as unknown as keyof HTMLDivElement] === 'function'
	}

	if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
		// This is the only way to test support for the `wheel` event in IE9+.
		isSupported = document.implementation.hasFeature('Events.wheel', '3.0')
	}

	return isSupported
}

export default isEventSupported
