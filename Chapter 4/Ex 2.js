var reverseArray = function(array){
  var newArray = [];

  for (var i = array.length -1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}


console.log(reverseArray(['a','b','c']));

var reverseArrayInPlace = function(array){
  var hold;
  for(i = 0; i < Math.floor(array.length/2); i++){
    hold = array[i];
    array[i] = array[array.length - i -1];
    array[array.length - i -1] = hold;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
