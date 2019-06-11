function range(start, end, step) {
  let createdArray = [];

  // Check that valid arguments have been passed, return empty array if so
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return createdArray;
  } 

  // Push each element to array incrementing based on arguments
  for (let i = start; i <= end; i += step) {
    createdArray.push(i);
  }

  return createdArray;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(5, 1, -3));