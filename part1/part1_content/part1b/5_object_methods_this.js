console.log("not relevant to course but relevant in general")

//can go
const arto = {
	name: 'Arto Hellas',
	age: 35,
	education: 'PhD',
	greet: function () {
		console.log('hello, my name is ' + this.name)
	},
	doAddition: function (a, b) {
		console.log(a + b)
	},
}


arto.growOlder = function () {
	this.age += 1
}

arto.doAddition(1, 4) //5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) //25 is printed

arto.greet() // prints hello my name is artis

const referenceToGreet = arto.greet
referenceToGreet() //prince helo my name is undefined, `this` becomes global object.

//here is another place where this problem arises
// this refers, for some reason, to the global object
setTimeout(arto.greet, 1000)

// so instead we have to go:
setTimeout(arto.greet.bind(arto), 1000)


// arrow functions solfe some problems but they shouldn't be used as object methods.
//there is a recommended article to understand `this` egghead.io undersdand jacascripts this keyword in depth
