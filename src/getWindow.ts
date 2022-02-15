const getWindow = (node: any): Window | null => {
	if (node === node?.window) {
		return node
	}

	return node?.nodeType === 9 ? node?.defaultView || node?.parentWindow || null : null
}

export default getWindow
