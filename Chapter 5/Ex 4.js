const every = (array, type)=>{

    return array.reduce((bool, item)=>{
      return type(item) === false ? false : bool
    }, true)
}

const some = (array, type)=>{
  return array.reduce((bool, item)=>{
    return type(item) ? true : bool
  },false)
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
