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

let ages = []
ancestry.forEach((person)=>{
  if(byName[person.mother]){
    ages.push(person.born - byName[person.mother].born)
  }
})

console.log(average(ages))
// → 31.2
