import camelizeStyleName from './utils/camelizeStyleName'
import getComputedStyle from './utils/getComputedStyle'
import hyphenateStyleName from './utils/hyphenateStyleName'

function getStyle(node: Element): CSSStyleDeclaration | null
function getStyle(node: Element, property: string): string | null
function getStyle(node: Element, property?: string): CSSStyleDeclaration | string | null {
	if (property) {
		const value = (node as HTMLElement).style[camelizeStyleName(property) as unknown as number]

		if (value) {
			return value
		}

		const styles = getComputedStyle(node)

		if (styles) {
			return styles.getPropertyValue(hyphenateStyleName(property))
		}
	}
	return (node as HTMLElement).style || getComputedStyle(node)
}

export default getStyle
