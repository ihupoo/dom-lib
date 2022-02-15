const getDocument = (node: Element | null): Document => (node && node.ownerDocument) || document

export default getDocument
