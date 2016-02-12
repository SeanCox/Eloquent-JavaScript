var arrayToList = function(array){
  var list = null;

  for(i = array.length-1; i >= 0; i-- ){
   list = {Value: array[i], rest: list}
  }
  return list;
}

var listToArray = function(list){
    var array = [];
    //need stuff here
    return array;
}


var prepend = function(element, list){
  var newList
  newList = {Value: array[i], rest: list}
  return newList;
}

var nth = function(list, number){
//need stuff here

}
