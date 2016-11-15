const data = require('./data')

ancestry = JSON.parse(data)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

let dateArraysObj = {}

ancestry.forEach((person)=>{
  let centuryOfDeath = Math.ceil(person.died / 100)
  let age = person.died - person.born
  dateArraysObj[centuryOfDeath] ? dateArraysObj[centuryOfDeath].push(age) : dateArraysObj[centuryOfDeath] = [age]
})

for(key in dateArraysObj){
  dateArraysObj[key] = average(dateArraysObj[key])
}

console.log(dateArraysObj)

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
