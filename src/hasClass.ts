const hasClass = (target: Element, className: string): boolean => {
	if (target.classList) {
		return !!className && target.classList.contains(className)
	}
	return ` ${target.className} `.indexOf(` ${className} `) !== -1
}

export default hasClass
