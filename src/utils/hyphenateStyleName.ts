import { hyphenate } from './stringFormatter'

const msPattern = /^ms-/

const hyphenateStyleName = (string: string) => hyphenate(string).replace(msPattern, '-ms-')

export default hyphenateStyleName
