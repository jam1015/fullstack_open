const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log("getting things from the object using brackets and dot")
console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])
console.log("adding properties with brackets and dot")
object1.address = "Helsinki"
object1['secret number'] = 12341 //using brackets because of the space

//will ahve to learn about classes/proptype inheritance later

