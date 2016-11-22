// Your code here.
function Vector(x, y){
  this.x = x
  this.y = y
  this.length = Math.sqrt((this.x * this.x) + (this.y * this.y))
}

Vector.prototype.plus = function(vector){
  console.log(this.x, vector.x)
  return {
    x: this.x + vector.x,
    y: this.y + vector.y
  }
}
Vector.prototype.minus = function(vector){
  return{
    x: this.x - vector.x,
    y: this.y - vector.y
  }
}



console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
