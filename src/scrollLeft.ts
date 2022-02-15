import getWindow from './getWindow'

const scrollLeft = (node: Element, val?: number): number => {
	const win = getWindow(node)
	let left = node.scrollLeft
	let top = 0

	if (win) {
		left = win.pageXOffset
		top = win.pageYOffset
	}

	if (val !== undefined) {
		if (win) {
			win.scrollTo(val, top)
		} else {
			node.scrollLeft = val
		}
	}

	return left
}

export default scrollLeft
