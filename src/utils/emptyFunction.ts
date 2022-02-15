function makeEmptyFunction(arg: any) {
	return () => arg
}

function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction
emptyFunction.thatReturnsFalse = makeEmptyFunction(false)
emptyFunction.thatReturnsTrue = makeEmptyFunction(true)
emptyFunction.thatReturnsNull = makeEmptyFunction(null)
emptyFunction.thatReturnsArgument = (arg: any) => arg

export default emptyFunction
