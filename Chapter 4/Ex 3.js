var arrayToList = function(array){
  var list = {};


  array.forEach(function(i){
    list.push({'value': i.value,})
  })


  return list;
}
