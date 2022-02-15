import canUseDOM from './canUseDOM'

const vendorMap: { [key: string]: string } = {
	animation: 'animationend',
	OAnimation: 'oAnimationEnd',
	MozAnimation: 'animationend',
	WebkitAnimation: 'webkitAnimationEnd',
}

function getAnimationEnd() {
	if (!canUseDOM) {
		return
	}

	let tempAnimationEnd
	const style = document.createElement('div').style
	for (tempAnimationEnd in vendorMap) {
		if (style[tempAnimationEnd as unknown as keyof CSSStyleDeclaration] !== undefined) {
			return vendorMap[tempAnimationEnd]
		}
	}
}

export default getAnimationEnd
