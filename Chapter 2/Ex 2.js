for (var i = 0; i < 101; i++) {
  var fizzBuzz = '';

  if (i % 3 === 0) fizzBuzz += 'Fizz';
  if (i % 5 === 0) fizzBuzz += 'Buzz';
  if (fizzBuzz === '') fizzBuzz = i;

  console.log(fizzBuzz);
}
