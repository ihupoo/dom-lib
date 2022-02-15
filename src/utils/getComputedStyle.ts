const getComputedStyle = (node: Element): CSSStyleDeclaration | null => {
	if (!node) {
		throw new TypeError('No Element passed to `getComputedStyle()`')
	}

	const doc = node.ownerDocument

	if ('defaultView' in doc) {
		if (doc.defaultView!.opener) {
			return node.ownerDocument?.defaultView?.getComputedStyle(node, null) ?? null
		}

		return window.getComputedStyle(node, null)
	}

	return null
}

export default getComputedStyle
