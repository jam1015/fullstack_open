console.log("making an example of an arrow functin")

const sum = (p1, p2) => {
	console.log(p1)
	console.log(p2)
	return p1 + p2
}

const result = sum(1, 5)
console.log(result)


console.log("can omit parentheses if only one parameter")

const square = p => {
	console.log(p)
	return p * p
}


console.log("can ommit brackets if it's a one liner; seems like I can't use return statment here")
const squarenb = p => p * p
console.log(squarenb(100))


console.log("paren/bracketless version is good for working with arrays")
const t  = [1, 2, 3]
const tSquared = t.map(p => p * p)


console.log("two ways to access a function; expressions and declarations; declarations are hoisted, expression are not; wrap in parentheses for IIFE (will have to learn more about iife later); better to use expressions for callbacks to not pollute  the scope")
function product(a, b) {
	return a * b
}

const ex_result = product(2, 6)

const average = function(a, b) {
	return (a + b) /2
}

const av_result = average(2, 5)
