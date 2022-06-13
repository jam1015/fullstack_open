import {useState} from 'react'
const App = () => {
	console.log(useState(0))
	const [counter, setCounter] = useState(0)
	setTimeout(() => setCounter(counter + 1), 1000)
	return (
		<div>{counter}</div>
	)
}

export default App
