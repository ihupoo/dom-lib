import getWindow from './getWindow'

const scrollTop = (node: Element, val?: number): number => {
	const win = getWindow(node)
	let top = node.scrollTop
	let left = 0

	if (win) {
		top = win.pageYOffset
		left = win.pageXOffset
	}

	if (val !== undefined) {
		if (win) {
			win.scrollTo(left, val)
		} else {
			node.scrollTop = val
		}
	}

	return top
}

export default scrollTop
