import { camelize } from './stringFormatter'

const msPattern = /^ms-/

const camelizeStyleName = (name: string) => camelize(name.replace(msPattern, 'ms-'))

export default camelizeStyleName
