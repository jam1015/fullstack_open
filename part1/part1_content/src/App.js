const Hello = (props) => {
	return (
		<div>
			<p>Hello world {props.name}, you are {props.age} years old </p>
		</div>
	)
}

const Footer = () => {
	return (
		<div>
			greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
		</div>
	)
}

const App = () => {
	const name = "Peter"
	const age = 10
	console.log("going to art all night, with arthur and greg")

	return (
		<div> // this is necessary, or can use an array of components; better to use root component
			<h1>Greetings</h1>
			<Hello name="Maya" age={34 * 3} />
			<Hello name={name} age={age} />
			<Footer />
		</div>
	)
}

export default App
