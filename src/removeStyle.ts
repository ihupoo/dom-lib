function rmStyle(node: Element, key: string) {
	;(node as HTMLElement).style?.removeProperty?.(key)
}

/**
 * key(s) typeof [string , array] ?
 */
const removeStyle = (node: Element, keys: string | Array<string>) => {
	if (typeof keys === 'string') {
		rmStyle(node, keys)
	} else if (Array.isArray(keys)) {
		keys.forEach((key) => rmStyle(node, key))
	}
}

export default removeStyle
