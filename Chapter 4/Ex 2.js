var reverseArray = function(array){
  var newArray = [];

  for (var i = array.length; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}


console.log(reverseArray(['a','b','c']));
