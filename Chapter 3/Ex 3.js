var countChar = function(word, letter){
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) count++;
  }
  return count;
}

var countBs = function(word){
  return countChar(word, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
