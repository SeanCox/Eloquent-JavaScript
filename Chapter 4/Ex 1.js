var range = function(start, end, by){
  var array = [];
  var placeHolder;

  if (by === undefined) by = 1;

  if (by > 0){
    for(start; start <= end; start += by){
      array.push(start);
    }
  }else{
    for(start; start >= end; start += by){
      array.push(start);
    }
  }
    return array;
  }

  var sum = function(array){
    var total = 0;

    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }

  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));
