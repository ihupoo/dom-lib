import getOffsetParent from './getOffsetParent'
import getOffset from './getOffset'
import getStyle from './getStyle'
import scrollTop from './scrollTop'
import scrollLeft from './scrollLeft'
import nodeName from './nodeName'

type Offset = {
	top: number
	left: number
	height: number
	width: number
}

const getPosition = (node: Element, offsetParent?: Element, calcMargin = true): Offset | DOMRect | null => {
	const parentOffset = {
		top: 0,
		left: 0,
	}

	let offset = null

	// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if (getStyle(node, 'position') === 'fixed') {
		offset = node.getBoundingClientRect()
	} else {
		offsetParent = offsetParent || getOffsetParent(node)
		offset = getOffset(node)

		if (nodeName(offsetParent) !== 'html') {
			const nextParentOffset = getOffset(offsetParent)
			if (nextParentOffset) {
				parentOffset.top = nextParentOffset.top
				parentOffset.left = nextParentOffset.left
			}
		}

		parentOffset.top += parseInt(getStyle(offsetParent, 'borderTopWidth') + '', 10) - scrollTop(offsetParent) || 0
		parentOffset.left +=
			parseInt(getStyle(offsetParent, 'borderLeftWidth') + '', 10) - scrollLeft(offsetParent) || 0
	}

	// Subtract parent offsets and node margins

	if (offset) {
		const marginTop = calcMargin ? parseInt(getStyle(node, 'marginTop') + '', 10) || 0 : 0
		const marginLeft = calcMargin ? parseInt(getStyle(node, 'marginLeft') + '', 10) || 0 : 0
		return {
			...offset,
			top: offset.top - parentOffset.top - marginTop,
			left: offset.left - parentOffset.left - marginLeft,
		}
	}

	return null
}

export default getPosition
