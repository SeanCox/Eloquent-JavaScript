var arrayToList = function(array){
  var list = null;

  for(var i = array.length-1; i >= 0; i-- ){
   list = {value: array[i], rest: list}
  }
  return list;
}

var listToArray = function(list){
    var array = [];
for (var node = list; node; node = node.rest) {
  array.push(node.value);
}
    return array;
}


var prepend = function(element, list){
  var newList;
  newList = {Value: element, rest: list}
  return newList;
}

var nth = function(list, number){
  if (!list)
    return undefined;
  else if (number == 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
