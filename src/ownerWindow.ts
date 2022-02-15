import ownerDocument from './ownerDocument'

const getWindow = (componentOrElement: Element): Window | null => {
	const doc = ownerDocument(componentOrElement)
	return doc.defaultView
}

export default getWindow
