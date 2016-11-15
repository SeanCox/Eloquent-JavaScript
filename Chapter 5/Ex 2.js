const data = require('./data')

ancestry = JSON.parse(data)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

let ages = ancestry.filter((person)=>{
  return byName[person.mother]
})
 .map((person)=>{
   return person.born - byName[person.mother].born
 })

console.log(average(ages))
// → 31.2
