function getContainer(container: Element | null | (() => Element | null), defaultContainer?: Element): Element | null {
	container = typeof container === 'function' ? container() : container
	return container || defaultContainer || null
}

export default getContainer
