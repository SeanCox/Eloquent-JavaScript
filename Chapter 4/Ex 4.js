var obj = {here: {is: "an"}, object: 2};

var deepEqual = function(varA, varB){
a = JSON.stringify(varA);
b = JSON.stringify(varB);

  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false
    };
  }
   return true;
};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
