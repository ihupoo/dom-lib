import getWindow from './getWindow'
import getOffset from './getOffset'

const getHeight = (node: Element | Window, client?: Element): number | null => {
	const win = getWindow(node)

	if (win) {
		return win.innerHeight
	}

	return client ? (node as Element).clientHeight : getOffset(node as Element)?.height ?? null
}
export default getHeight
