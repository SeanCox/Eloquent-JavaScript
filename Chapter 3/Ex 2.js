var isEven = function(n){
  if (n < 0) n = -n;
  if (n === 0) return true;
  if (n === 1) return false;
  n = n -2
  return isEven(n);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
