const x = 1
let y = 5

console.log("initial values")
console.log(x , y)
y += 10
console.log("added ten to y")
console.log(x, y)
y = 'sometext'
console.log("changed value of y")
console.log(x, y)
console.log("attempting to change value of constant x: causes error")
x = 4
console.log(x, y)
