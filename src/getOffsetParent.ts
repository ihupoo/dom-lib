import ownerDocument from './ownerDocument'
import nodeName from './nodeName'
import getStyle from './getStyle'

const getOffsetParent = (node: Element): Element => {
	const doc = ownerDocument(node)
	let offsetParent = (node as HTMLElement)?.offsetParent

	while (offsetParent && nodeName(node) !== 'html' && getStyle(offsetParent, 'position') === 'static') {
		offsetParent = (offsetParent as HTMLElement).offsetParent
	}

	return offsetParent || doc.documentElement
}

export default getOffsetParent
