var chessBoard = function (height, width){

  for (var i = 0; i < height; i++) {
    var rv = '';

    if (i % 2 === 0) {
      for (var j = 0; j < width; j++) {
        if (j % 2 === 0){
          rv += ' '
        }else {
          rv += '#'
        }

      }
      console.log(rv);
    }else{
      for (var j = 0; j < width; j++) {
        if (j % 2 === 0){
          rv += '#'
        }else {
          rv += ' '
        }
    }
    console.log(rv);
  }



}
return;
}

chessBoard(8,8);
