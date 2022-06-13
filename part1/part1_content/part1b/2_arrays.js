const t = [1, -1, 3]

// can do this even though array is const
t.push(5)

console.log("t length: " + t.length)
console.log("second element: " + t[1])

console.log("pringin each element of t")
t.forEach(value => {
	console.log(value)
})

const t2 = t.concat(5) //better to concat in react thatn push; something to do with functional programming
console.log(t2)

console.log("mapping function that multiplies by 2")
const m1 = t.map(value => value * 2)
console.log(m1)

console.log("adding list item tags with map")
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

console.log("now we are doing a destrtucturing assignment")
const tt = [1, 2, 3, 4, 5]
const [first, second, ...rest] = tt
console.log("the  first and second elements")
console.log(first, second)

console.log("the rest")
console.log(rest)
