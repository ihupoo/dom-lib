import getWindow from './getWindow'
import getOffset from './getOffset'

const getWidth = (node: Element | Window, client?: Element): number => {
	const win = getWindow(node)

	if (win) {
		return win.innerWidth
	}

	if (client) {
		return (node as Element).clientWidth
	}

	const offset = getOffset(node as Element)

	return offset ? offset.width : 0
}

export default getWidth
