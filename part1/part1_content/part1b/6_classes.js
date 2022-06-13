// we are simulating classes; they are not actually classes

class Person{
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	greet() {
		console.log('hello, my name i ' + this.name)
	}
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()

//they are all object types at their core, not people
// will have to look more into
// prototype inheritance

// we don't have to worry too much about class syntax because we are using the hooks feature of react
// we can find the functional programming goodness of js somehow.
