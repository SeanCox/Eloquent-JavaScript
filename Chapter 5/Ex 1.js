const arrays = [[1, 2, 3], [4, 5], [6]]

const flattenArray = (array)=>{
  return array.reduce((flat, cur)=>{
    return flat.concat(cur)
  },[])
}

console.log(flattenArray(arrays))
