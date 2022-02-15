import hasClass from './hasClass'
import addClass from './addClass'
import removeClass from './removeClass'

const toggleClass = (target: Element, className: string): Element => {
	if (hasClass(target, className)) {
		return removeClass(target, className)
	}
	return addClass(target, className)
}

export default toggleClass
